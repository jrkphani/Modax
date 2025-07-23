# ModAx Deployment Command

Deploy ModAx to specified environment: $ARGUMENTS

## Deployment Environments

### Development (Local)
```bash
# Start development server with MSW
npm run dev

# Access at:
# - Internal Portal: http://localhost:3001
# - External Website: http://localhost:3002
```

### Staging
```bash
# Build for staging
npm run build:staging

# Deploy to AWS staging
npm run deploy:staging

# Staging URLs:
# - Internal: https://internal-staging.modax.1cloudhub.com
# - External: https://staging.modax.ai
```

### Production
```bash
# Build for production
npm run build:production

# Deploy to AWS production
npm run deploy:production

# Production URLs:
# - Internal: https://portal.modax.ai
# - External: https://modax.ai
```

## Pre-deployment Checklist

1. **Quality Gates**
   - [ ] All tests passing: `npm test`
   - [ ] No linting errors: `npm run lint`
   - [ ] Type checking passes: `npm run type-check`
   - [ ] Security audit clean: `npm audit`
   - [ ] Bundle size within limits: `npm run analyze`

2. **Environment Configuration**
   - [ ] Environment variables set correctly
   - [ ] API endpoints configured
   - [ ] Auth providers configured
   - [ ] CDN settings updated
   - [ ] SSL certificates valid

3. **Database Migrations**
   - [ ] Migrations tested in staging
   - [ ] Backup created
   - [ ] Rollback plan documented

## Deployment Process

### 1. Build Phase
```bash
# Clean previous builds
rm -rf dist/

# Build applications
npm run build

# Verify build output
ls -la dist/
```

### 2. Test Phase
```bash
# Run smoke tests
npm run test:smoke

# Check build locally
npm run preview
```

### 3. Deploy Phase

#### Internal Portal (AWS ECS)
```bash
# Build Docker image
docker build -t modax-internal:$VERSION .

# Tag for ECR
docker tag modax-internal:$VERSION $ECR_REPO:$VERSION

# Push to ECR
docker push $ECR_REPO:$VERSION

# Update ECS service
aws ecs update-service \
  --cluster modax-cluster \
  --service modax-internal \
  --force-new-deployment
```

#### External Website (Vercel/CloudFront)
```bash
# Deploy to Vercel
vercel --prod

# Or deploy to S3/CloudFront
aws s3 sync dist/ s3://$BUCKET_NAME \
  --delete \
  --cache-control max-age=31536000

# Invalidate CloudFront
aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*"
```

### 4. Post-deployment Verification
```bash
# Health checks
curl -f https://portal.modax.ai/health

# Run E2E tests
npm run test:e2e:production

# Monitor metrics
npm run monitor:production
```

## Rollback Procedures

### Immediate Rollback
```bash
# ECS: Update to previous task definition
aws ecs update-service \
  --cluster modax-cluster \
  --service modax-internal \
  --task-definition modax-internal:$PREVIOUS_VERSION

# CloudFront: Restore previous S3 content
aws s3 sync s3://$BACKUP_BUCKET s3://$PROD_BUCKET \
  --delete
```

### Database Rollback
```bash
# Run rollback migrations
npm run migrate:rollback

# Restore from backup if needed
aws rds restore-db-instance-from-db-snapshot \
  --db-instance-identifier modax-db \
  --db-snapshot-identifier $SNAPSHOT_ID
```

## Environment-Specific Configurations

### Internal Portal
```env
# Production
VITE_API_URL=https://api.modax.ai
VITE_AUTH_DOMAIN=auth.modax.ai
VITE_ENABLE_MSW=false
VITE_ENVIRONMENT=production
```

### External Website
```env
# Production
VITE_API_URL=https://api.modax.ai
VITE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_ENABLE_MSW=false
VITE_ENVIRONMENT=production
```

## Monitoring & Alerts

### CloudWatch Dashboards
- Application performance metrics
- Error rates and logs
- API response times
- User activity patterns

### Alerts Configuration
- High error rate: > 1% errors
- Slow response time: > 2s p95
- Low disk space: < 10% available
- Failed health checks: 2 consecutive

## Security Checklist

- [ ] Secrets rotated
- [ ] WAF rules updated
- [ ] Security groups reviewed
- [ ] SSL certificates valid
- [ ] Penetration test passed

## Communication Plan

1. **Pre-deployment**
   - Notify team in #modax-deployments
   - Update status page
   - Send customer notification (if needed)

2. **During deployment**
   - Monitor deployment progress
   - Keep team updated on status
   - Watch for any issues

3. **Post-deployment**
   - Confirm successful deployment
   - Update documentation
   - Close deployment ticket

Usage: `/deploy [environment] [--version VERSION] [--dry-run]`

Examples:
- `/deploy staging`
- `/deploy production --version 1.2.3`
- `/deploy production --dry-run`