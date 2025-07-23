# Incident Response Workflow for ModAx

Handle production incidents following established procedures:

## Severity Levels

- **🔴 P1 (Critical)**: Complete outage, data loss risk, security breach
- **🟡 P2 (High)**: Major feature broken, significant performance degradation
- **🔵 P3 (Medium)**: Minor feature issues, non-critical bugs
- **⚪ P4 (Low)**: Cosmetic issues, minor inconveniences

## 1. Immediate Response (0-5 minutes)

### Acknowledge & Assess
```bash
# Check system status
curl https://portal.modax.ai/health
curl https://modax.ai/health

# View CloudWatch dashboard
aws cloudwatch get-metric-statistics \
  --namespace ModAx/Production \
  --metric-name ErrorRate \
  --start-time $(date -u -d '1 hour ago' +%Y-%m-%dT%H:%M:%S) \
  --end-time $(date -u +%Y-%m-%dT%H:%M:%S) \
  --period 300 \
  --statistics Average
```

### Initial Communication
- Post in #modax-incidents channel
- Tag @modax-oncall team
- Create incident ticket

Template:
```
🚨 INCIDENT: [Brief description]
Severity: P[1-4]
Impact: [Who/what is affected]
Status: Investigating
Time: [UTC timestamp]
```

## 2. Investigation (5-30 minutes)

### Log Analysis
```bash
# Recent application logs
aws logs tail /aws/ecs/modax-internal --follow --since 30m

# Error logs
aws logs filter-log-events \
  --log-group-name /aws/ecs/modax-internal \
  --filter-pattern "ERROR" \
  --start-time $(date -d '1 hour ago' +%s)000

# API Gateway logs
aws logs tail /aws/apigateway/modax-api --follow
```

### Metrics Review
```bash
# CPU and memory usage
aws cloudwatch get-metric-statistics \
  --namespace AWS/ECS \
  --metric-name CPUUtilization \
  --dimensions Name=ServiceName,Value=modax-internal \
  --start-time $(date -u -d '1 hour ago' +%Y-%m-%dT%H:%M:%S) \
  --end-time $(date -u +%Y-%m-%dT%H:%M:%S) \
  --period 300 \
  --statistics Average,Maximum

# Database connections
aws cloudwatch get-metric-statistics \
  --namespace AWS/RDS \
  --metric-name DatabaseConnections \
  --dimensions Name=DBInstanceIdentifier,Value=modax-db
```

### Recent Changes
```bash
# Check recent deployments
aws ecs describe-services \
  --cluster modax-cluster \
  --services modax-internal \
  --query 'services[0].deployments'

# Recent commits
git log --oneline --since="2 hours ago"

# Infrastructure changes
aws cloudtrail lookup-events \
  --start-time $(date -u -d '2 hours ago' +%Y-%m-%dT%H:%M:%S) \
  --max-items 50
```

## 3. Mitigation (Varies by issue)

### Common Mitigation Actions

#### High CPU/Memory
```bash
# Scale ECS service
aws ecs update-service \
  --cluster modax-cluster \
  --service modax-internal \
  --desired-count 10

# Or use auto-scaling
aws application-autoscaling put-scaling-policy \
  --service-namespace ecs \
  --scalable-dimension ecs:service:DesiredCount \
  --resource-id service/modax-cluster/modax-internal \
  --policy-name cpu-scaling \
  --policy-type TargetTrackingScaling
```

#### API Overload
```bash
# Enable rate limiting
aws apigateway update-stage \
  --rest-api-id $API_ID \
  --stage-name production \
  --patch-operations \
    op=replace,path=/throttle/rateLimit,value=1000

# Enable caching
aws apigateway update-stage \
  --rest-api-id $API_ID \
  --stage-name production \
  --patch-operations \
    op=replace,path=/cacheClusterEnabled,value=true
```

#### Database Issues
```bash
# Check active connections
aws rds describe-db-instances \
  --db-instance-identifier modax-db \
  --query 'DBInstances[0].DBInstanceStatus'

# Kill long-running queries (if needed)
# Connect to DB and run: SHOW PROCESSLIST; KILL [process_id];
```

#### Feature Flag Rollback
```bash
# Disable problematic feature
curl -X POST https://api.modax.ai/admin/features \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  -d '{"feature": "new-calculator", "enabled": false}'
```

#### Full Rollback
```bash
# Rollback to previous version
npm run deploy:rollback production $PREVIOUS_VERSION

# Or manually via ECS
aws ecs update-service \
  --cluster modax-cluster \
  --service modax-internal \
  --task-definition modax-internal:$PREVIOUS_VERSION
```

## 4. Resolution & Recovery

### Verify Fix
```bash
# Run health checks
./scripts/health-check.sh production

# Monitor error rates
watch -n 5 'aws cloudwatch get-metric-statistics \
  --namespace ModAx/Production \
  --metric-name ErrorRate \
  --start-time $(date -u -d "10 minutes ago" +%Y-%m-%dT%H:%M:%S) \
  --end-time $(date -u +%Y-%m-%dT%H:%M:%S) \
  --period 60 \
  --statistics Average'

# Check user reports
# Monitor #modax-support channel
```

### Update Status
```
✅ RESOLVED: [Brief description]
Duration: [X] minutes
Root Cause: [Brief explanation]
Fix Applied: [What was done]
Next Steps: Post-mortem scheduled for [date/time]
```

## 5. Post-Incident

### Document Incident
Create incident report with:
- Timeline of events
- Root cause analysis
- Impact assessment
- Actions taken
- Lessons learned

### Post-mortem Meeting
Schedule within 48 hours including:
- Engineering team
- Product owner
- DevOps lead
- Customer success (if customer impact)

### Action Items
- Update runbooks
- Add monitoring/alerts
- Fix root cause
- Improve testing
- Update documentation

## Emergency Contacts

- **On-call Engineer**: Check #modax-oncall
- **Engineering Lead**: [Contact]
- **DevOps Lead**: [Contact]
- **Product Owner**: [Contact]
- **AWS Support**: [Case URL]

## Quick Reference Commands

```bash
# Show all ModAx services status
aws ecs list-services --cluster modax-cluster

# Recent errors across all services
aws logs insights query \
  --log-group-names "/aws/ecs/modax-internal" "/aws/lambda/modax-api" \
  --start-time $(date -d '1 hour ago' +%s) \
  --end-time $(date +%s) \
  --query-string 'fields @timestamp, @message | filter @message like /ERROR/ | sort @timestamp desc | limit 50'

# Current deployment versions
aws ecs describe-task-definition \
  --task-definition modax-internal \
  --query 'taskDefinition.containerDefinitions[0].image'
```

## Escalation Path

1. On-call engineer (0-15 min)
2. Engineering lead (15-30 min)
3. CTO (30+ min for P1)
4. CEO (60+ min for P1 with customer impact)

Maintain clear communication throughout the incident resolution process.