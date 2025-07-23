# ModAx Component Reference
## Reusable Components & Patterns Library

Last Updated: January 2025 | Version: 1.0 | Status: Active

---

## Table of Contents

1. [Core Components](#1-core-components)
2. [Business Components](#2-business-components)
3. [Integration Components](#3-integration-components)
4. [AI/ML Components](#4-aiml-components)
5. [Utility Components](#5-utility-components)
6. [UI Component Library](#6-ui-component-library)

---

## 1. Core Components

### Authentication Manager

```typescript
/**
 * Universal authentication component supporting multiple providers
 * Reusability: 100% across all projects
 */
interface AuthConfig {
  provider: 'auth0' | 'okta' | 'cognito' | 'custom';
  domain: string;
  clientId: string;
  redirectUri: string;
  scope?: string[];
}

class AuthenticationManager {
  private config: AuthConfig;
  private tokenManager: TokenManager;
  
  async login(credentials?: Credentials): Promise<AuthResult> {
    // Provider-agnostic login flow
  }
  
  async logout(): Promise<void> {
    // Centralized logout handling
  }
  
  async refreshToken(): Promise<Token> {
    // Automatic token refresh
  }
  
  getUser(): AuthUser | null {
    // Current user retrieval
  }
}

// Usage Example
const auth = new AuthenticationManager({
  provider: 'auth0',
  domain: 'modax.auth0.com',
  clientId: process.env.AUTH0_CLIENT_ID,
  redirectUri: window.location.origin
});
```

### Data Access Layer

```typescript
/**
 * Generic repository pattern for data access
 * Reusability: 95% (customize queries per entity)
 */
abstract class Repository<T extends Entity> {
  protected db: DatabaseConnection;
  protected tableName: string;
  
  async findById(id: string): Promise<T | null> {
    const result = await this.db.query(
      `SELECT * FROM ${this.tableName} WHERE id = $1`,
      [id]
    );
    return result.rows[0] || null;
  }
  
  async findAll(options?: QueryOptions): Promise<T[]> {
    const query = this.buildQuery(options);
    const result = await this.db.query(query);
    return result.rows;
  }
  
  async create(entity: Omit<T, 'id'>): Promise<T> {
    const fields = Object.keys(entity);
    const values = Object.values(entity);
    const placeholders = fields.map((_, i) => `$${i + 1}`);
    
    const result = await this.db.query(
      `INSERT INTO ${this.tableName} (${fields.join(', ')}) 
       VALUES (${placeholders.join(', ')}) 
       RETURNING *`,
      values
    );
    return result.rows[0];
  }
  
  async update(id: string, updates: Partial<T>): Promise<T> {
    // Generic update implementation
  }
  
  async delete(id: string): Promise<boolean> {
    // Generic delete implementation
  }
}

// Implementation Example
class OrderRepository extends Repository<Order> {
  tableName = 'orders';
  
  async findByCustomer(customerId: string): Promise<Order[]> {
    const result = await this.db.query(
      'SELECT * FROM orders WHERE customer_id = $1 ORDER BY created_at DESC',
      [customerId]
    );
    return result.rows;
  }
}
```

### Event Bus

```typescript
/**
 * Enterprise event bus for microservices communication
 * Reusability: 100% across all projects
 */
interface EventBusConfig {
  transport: 'kafka' | 'rabbitmq' | 'sqs' | 'memory';
  connectionString: string;
  options?: TransportOptions;
}

class EnterpriseEventBus {
  private transport: EventTransport;
  private handlers: Map<string, EventHandler[]> = new Map();
  
  async publish<T>(eventType: string, payload: T): Promise<void> {
    const event: DomainEvent = {
      id: uuid(),
      type: eventType,
      timestamp: new Date(),
      payload,
      metadata: this.enrichMetadata()
    };
    
    await this.transport.publish(event);
    await this.handleLocal(event);
  }
  
  subscribe(eventType: string, handler: EventHandler): void {
    const handlers = this.handlers.get(eventType) || [];
    handlers.push(handler);
    this.handlers.set(eventType, handlers);
    
    this.transport.subscribe(eventType, handler);
  }
  
  async replay(from: Date, to: Date, filter?: EventFilter): Promise<void> {
    // Event replay capability
  }
}
```

### Cache Manager

```typescript
/**
 * Multi-tier caching system
 * Reusability: 100% across all projects
 */
interface CacheConfig {
  tiers: CacheTier[];
  defaultTTL: number;
  namespace?: string;
}

interface CacheTier {
  name: string;
  type: 'memory' | 'redis' | 'dynamodb';
  maxSize?: number;
  ttl?: number;
}

class CacheManager {
  private tiers: CacheProvider[] = [];
  
  async get<T>(key: string): Promise<T | null> {
    for (const tier of this.tiers) {
      const value = await tier.get(key);
      if (value !== null) {
        // Promote to higher tiers
        await this.promote(key, value, tier);
        return value;
      }
    }
    return null;
  }
  
  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    // Set in all tiers
    await Promise.all(
      this.tiers.map(tier => tier.set(key, value, ttl))
    );
  }
  
  async invalidate(pattern: string): Promise<void> {
    // Pattern-based invalidation
    await Promise.all(
      this.tiers.map(tier => tier.invalidate(pattern))
    );
  }
}
```

---

## 2. Business Components

### Workflow Engine

```typescript
/**
 * Configurable workflow engine for business processes
 * Reusability: 90% (customize workflow definitions)
 */
interface WorkflowDefinition {
  id: string;
  name: string;
  steps: WorkflowStep[];
  transitions: Transition[];
  compensations?: Compensation[];
}

class WorkflowEngine {
  private definitions: Map<string, WorkflowDefinition> = new Map();
  private executor: WorkflowExecutor;
  
  async startWorkflow(
    definitionId: string, 
    context: WorkflowContext
  ): Promise<WorkflowInstance> {
    const definition = this.definitions.get(definitionId);
    if (!definition) {
      throw new Error(`Workflow ${definitionId} not found`);
    }
    
    const instance = await this.createInstance(definition, context);
    await this.executor.execute(instance);
    return instance;
  }
  
  async registerDefinition(definition: WorkflowDefinition): Promise<void> {
    this.validateDefinition(definition);
    this.definitions.set(definition.id, definition);
  }
}

// Usage Example
const orderWorkflow: WorkflowDefinition = {
  id: 'order-processing',
  name: 'Order Processing Workflow',
  steps: [
    { id: 'validate', handler: 'validateOrder' },
    { id: 'payment', handler: 'processPayment' },
    { id: 'inventory', handler: 'reserveInventory' },
    { id: 'shipping', handler: 'createShipment' }
  ],
  transitions: [
    { from: 'validate', to: 'payment', condition: 'isValid' },
    { from: 'payment', to: 'inventory', condition: 'isPaymentSuccess' },
    { from: 'inventory', to: 'shipping', condition: 'isInStock' }
  ]
};
```

### Rule Engine

```typescript
/**
 * Business rule engine with natural language support
 * Reusability: 85% (customize rule definitions)
 */
interface BusinessRule {
  id: string;
  name: string;
  conditions: Condition[];
  actions: Action[];
  priority?: number;
}

class RuleEngine {
  private rules: BusinessRule[] = [];
  private parser: RuleParser;
  
  async evaluate(context: RuleContext): Promise<RuleResult[]> {
    const applicableRules = this.filterApplicableRules(context);
    const results: RuleResult[] = [];
    
    for (const rule of applicableRules) {
      if (await this.evaluateConditions(rule.conditions, context)) {
        const result = await this.executeActions(rule.actions, context);
        results.push(result);
      }
    }
    
    return results;
  }
  
  async addRule(ruleText: string): Promise<BusinessRule> {
    // Parse natural language rule
    const rule = await this.parser.parse(ruleText);
    this.rules.push(rule);
    return rule;
  }
}

// Natural Language Rule Example
await ruleEngine.addRule(`
  When customer total purchases exceed $10000 
  and customer status is "gold"
  then apply 15% discount
  and send VIP notification
`);
```

### Notification Service

```typescript
/**
 * Multi-channel notification service
 * Reusability: 95% (customize templates)
 */
interface NotificationConfig {
  channels: NotificationChannel[];
  templates: TemplateProvider;
  preferences: PreferenceProvider;
}

class NotificationService {
  private channels: Map<string, NotificationChannel> = new Map();
  
  async send(notification: Notification): Promise<SendResult> {
    const user = await this.getUser(notification.userId);
    const preferences = await this.getPreferences(user);
    const enabledChannels = this.filterEnabledChannels(preferences);
    
    const results = await Promise.allSettled(
      enabledChannels.map(channel => 
        this.sendToChannel(channel, notification, user)
      )
    );
    
    return this.aggregateResults(results);
  }
  
  private async sendToChannel(
    channel: NotificationChannel,
    notification: Notification,
    user: User
  ): Promise<ChannelResult> {
    const template = await this.loadTemplate(notification.type, channel.type);
    const content = await this.renderTemplate(template, notification.data);
    return channel.send(user, content);
  }
}
```

---

## 3. Integration Components

### API Gateway

```typescript
/**
 * Smart API gateway with rate limiting and transformation
 * Reusability: 90% (customize routes and policies)
 */
interface GatewayConfig {
  routes: RouteDefinition[];
  middleware: Middleware[];
  rateLimits: RateLimitPolicy[];
  transformers: Transformer[];
}

class APIGateway {
  private router: Router;
  private rateLimiter: RateLimiter;
  
  async handleRequest(req: Request): Promise<Response> {
    // Rate limiting
    const allowed = await this.rateLimiter.check(req);
    if (!allowed) {
      return this.tooManyRequests();
    }
    
    // Route matching
    const route = this.router.match(req.path, req.method);
    if (!route) {
      return this.notFound();
    }
    
    // Request transformation
    const transformedReq = await this.transformRequest(req, route);
    
    // Forward to backend
    const backendResponse = await this.forwardRequest(transformedReq, route);
    
    // Response transformation
    return this.transformResponse(backendResponse, route);
  }
}
```

### Legacy Adapter

```typescript
/**
 * Universal adapter for legacy system integration
 * Reusability: 80% (customize protocol handlers)
 */
interface LegacySystemConfig {
  type: 'mainframe' | 'as400' | 'cobol' | 'custom';
  connection: ConnectionConfig;
  encoding?: string;
  timeout?: number;
}

class LegacyAdapter {
  private connector: LegacyConnector;
  private translator: DataTranslator;
  
  async execute(command: ModernCommand): Promise<ModernResponse> {
    // Translate modern request to legacy format
    const legacyRequest = await this.translator.modernToLegacy(command);
    
    // Execute on legacy system
    const legacyResponse = await this.connector.send(legacyRequest);
    
    // Handle legacy system quirks
    const normalizedResponse = this.normalizeResponse(legacyResponse);
    
    // Translate back to modern format
    return this.translator.legacyToModern(normalizedResponse);
  }
  
  async batch(commands: ModernCommand[]): Promise<ModernResponse[]> {
    // Batch optimization for legacy systems
    const batched = this.optimizeBatch(commands);
    return this.executeBatch(batched);
  }
}
```

### ETL Pipeline

```typescript
/**
 * Configurable ETL pipeline for data migration
 * Reusability: 85% (customize transformations)
 */
interface ETLConfig {
  source: DataSource;
  transformations: Transformation[];
  destination: DataDestination;
  errorHandling: ErrorStrategy;
}

class ETLPipeline {
  private extractor: Extractor;
  private transformer: Transformer;
  private loader: Loader;
  
  async run(config: ETLConfig): Promise<ETLResult> {
    const startTime = Date.now();
    const stats = new ETLStats();
    
    try {
      // Extract phase
      const stream = await this.extractor.extract(config.source);
      
      // Transform phase
      const transformed = stream
        .pipe(this.createTransformPipeline(config.transformations))
        .pipe(this.createValidationPipeline())
        .pipe(this.createStatsCollector(stats));
      
      // Load phase
      await this.loader.load(transformed, config.destination);
      
      return {
        success: true,
        stats: stats.finalize(),
        duration: Date.now() - startTime
      };
    } catch (error) {
      return this.handleError(error, stats);
    }
  }
}
```

---

## 4. AI/ML Components

### Intelligence Fabric Client

```typescript
/**
 * Client for accessing the ModAx Intelligence Fabric
 * Reusability: 100% across all modernized applications
 */
interface IntelligenceFabricConfig {
  endpoint: string;
  apiKey: string;
  model?: string;
}

class IntelligenceFabricClient {
  private config: IntelligenceFabricConfig;
  private cache: IntelligenceCache;
  
  async query(question: string, context?: QueryContext): Promise<Answer> {
    // Check cache
    const cached = await this.cache.get(question, context);
    if (cached) return cached;
    
    // Query intelligence fabric
    const response = await this.sendQuery({
      question,
      context,
      includeReasoning: true,
      includeConfidence: true
    });
    
    // Cache result
    await this.cache.set(question, context, response);
    
    return response;
  }
  
  async explainBusinessRule(ruleId: string): Promise<Explanation> {
    return this.query(`Explain business rule ${ruleId}`, {
      type: 'rule_explanation',
      ruleId
    });
  }
  
  async suggestOptimization(
    process: string
  ): Promise<OptimizationSuggestion[]> {
    return this.query(`How can we optimize ${process}?`, {
      type: 'optimization',
      process
    });
  }
}
```

### Predictive Analytics Engine

```typescript
/**
 * ML-powered predictive analytics
 * Reusability: 85% (customize models per use case)
 */
interface PredictionConfig {
  model: string;
  features: FeatureDefinition[];
  target: string;
  confidence?: number;
}

class PredictiveAnalytics {
  private models: Map<string, MLModel> = new Map();
  private featureStore: FeatureStore;
  
  async predict(
    entity: string,
    prediction: string,
    context?: PredictionContext
  ): Promise<Prediction> {
    const model = await this.loadModel(prediction);
    const features = await this.featureStore.getFeatures(entity, model.features);
    
    const result = await model.predict(features);
    
    return {
      value: result.prediction,
      confidence: result.confidence,
      explanation: await this.explainPrediction(result),
      timestamp: new Date()
    };
  }
  
  async trainModel(
    config: TrainingConfig
  ): Promise<TrainedModel> {
    const dataset = await this.prepareDataset(config);
    const model = await this.selectModel(config);
    
    const trained = await model.train(dataset, {
      validation: 0.2,
      metrics: ['accuracy', 'precision', 'recall'],
      earlyStop: true
    });
    
    await this.registerModel(trained);
    return trained;
  }
}
```

### Anomaly Detection

```typescript
/**
 * Real-time anomaly detection system
 * Reusability: 90% (customize detection algorithms)
 */
interface AnomalyConfig {
  algorithm: 'isolation-forest' | 'autoencoder' | 'statistical';
  sensitivity: number;
  windowSize: number;
  features: string[];
}

class AnomalyDetector {
  private detector: Detector;
  private alerting: AlertingService;
  
  async detectAnomaly(
    data: DataPoint,
    stream: string
  ): Promise<AnomalyResult> {
    const features = await this.extractFeatures(data);
    const score = await this.detector.score(features);
    
    if (score > this.threshold) {
      const anomaly = {
        score,
        data,
        stream,
        timestamp: new Date(),
        severity: this.calculateSeverity(score)
      };
      
      await this.alerting.sendAlert(anomaly);
      return { isAnomaly: true, details: anomaly };
    }
    
    return { isAnomaly: false };
  }
  
  async trainDetector(
    historicalData: DataPoint[]
  ): Promise<void> {
    const features = await this.extractBatchFeatures(historicalData);
    await this.detector.train(features);
    this.updateThreshold();
  }
}
```

---

## 5. Utility Components

### Retry Manager

```typescript
/**
 * Intelligent retry mechanism with backoff
 * Reusability: 100% across all projects
 */
interface RetryConfig {
  maxAttempts: number;
  backoff: 'exponential' | 'linear' | 'fibonacci';
  initialDelay: number;
  maxDelay: number;
  retryableErrors?: string[];
}

class RetryManager {
  async execute<T>(
    operation: () => Promise<T>,
    config: RetryConfig
  ): Promise<T> {
    let lastError: Error;
    
    for (let attempt = 1; attempt <= config.maxAttempts; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;
        
        if (!this.isRetryable(error, config)) {
          throw error;
        }
        
        if (attempt < config.maxAttempts) {
          const delay = this.calculateDelay(attempt, config);
          await this.sleep(delay);
        }
      }
    }
    
    throw new RetryExhaustedError(lastError, config.maxAttempts);
  }
}
```

### Health Monitor

```typescript
/**
 * Comprehensive health monitoring system
 * Reusability: 95% (customize health checks)
 */
interface HealthCheckConfig {
  checks: HealthCheck[];
  interval: number;
  timeout: number;
  degradedThreshold: number;
}

class HealthMonitor {
  private checks: Map<string, HealthCheck> = new Map();
  private status: HealthStatus = 'healthy';
  
  async checkHealth(): Promise<HealthReport> {
    const results = await Promise.allSettled(
      Array.from(this.checks.values()).map(check => 
        this.executeCheck(check)
      )
    );
    
    const report = this.aggregateResults(results);
    this.updateStatus(report);
    
    return report;
  }
  
  registerCheck(name: string, check: HealthCheck): void {
    this.checks.set(name, check);
  }
  
  async startMonitoring(): Promise<void> {
    setInterval(() => this.checkHealth(), this.config.interval);
  }
}
```

### Feature Flag Manager

```typescript
/**
 * Feature flag system for gradual rollouts
 * Reusability: 100% across all projects
 */
interface FeatureFlagConfig {
  provider: 'launchdarkly' | 'split' | 'custom';
  environment: string;
  defaultFlags?: Record<string, boolean>;
}

class FeatureFlagManager {
  private provider: FeatureFlagProvider;
  private cache: Map<string, boolean> = new Map();
  
  async isEnabled(
    flag: string,
    context?: FlagContext
  ): Promise<boolean> {
    // Check cache first
    const cacheKey = this.getCacheKey(flag, context);
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }
    
    // Evaluate flag
    const enabled = await this.provider.evaluate(flag, context);
    this.cache.set(cacheKey, enabled);
    
    return enabled;
  }
  
  async waitForFlag(
    flag: string,
    context?: FlagContext
  ): Promise<void> {
    while (!(await this.isEnabled(flag, context))) {
      await this.sleep(1000);
    }
  }
}
```

---

## 6. UI Component Library

### Data Table

```tsx
/**
 * Advanced data table with sorting, filtering, and pagination
 * Reusability: 95% (customize columns and actions)
 */
interface DataTableProps<T> {
  data: T[];
  columns: ColumnDefinition<T>[];
  onSort?: (column: string, direction: 'asc' | 'desc') => void;
  onFilter?: (filters: FilterState) => void;
  onPageChange?: (page: number) => void;
  actions?: TableAction<T>[];
}

function DataTable<T>({
  data,
  columns,
  onSort,
  onFilter,
  onPageChange,
  actions
}: DataTableProps<T>) {
  const [sortState, setSortState] = useState<SortState>();
  const [filterState, setFilterState] = useState<FilterState>({});
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <div className="data-table">
      <TableFilters 
        columns={columns}
        onFilter={handleFilter}
      />
      
      <Table>
        <TableHeader 
          columns={columns}
          sortState={sortState}
          onSort={handleSort}
        />
        <TableBody 
          data={paginatedData}
          columns={columns}
          actions={actions}
        />
      </Table>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
```

### Form Builder

```tsx
/**
 * Dynamic form builder with validation
 * Reusability: 90% (customize field types)
 */
interface FormBuilderProps {
  schema: FormSchema;
  onSubmit: (values: FormValues) => Promise<void>;
  initialValues?: FormValues;
  validation?: ValidationSchema;
}

function FormBuilder({
  schema,
  onSubmit,
  initialValues,
  validation
}: FormBuilderProps) {
  const { 
    values, 
    errors, 
    touched, 
    handleChange, 
    handleBlur, 
    handleSubmit 
  } = useForm({
    initialValues,
    validation,
    onSubmit
  });
  
  return (
    <form onSubmit={handleSubmit}>
      {schema.fields.map(field => (
        <FormField
          key={field.name}
          field={field}
          value={values[field.name]}
          error={errors[field.name]}
          touched={touched[field.name]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ))}
      
      <FormActions>
        <Button type="submit">Submit</Button>
        <Button type="button" variant="secondary">Cancel</Button>
      </FormActions>
    </form>
  );
}
```

### Dashboard Widget

```tsx
/**
 * Configurable dashboard widget system
 * Reusability: 85% (customize widget types)
 */
interface WidgetProps {
  type: 'metric' | 'chart' | 'list' | 'custom';
  title: string;
  data: any;
  config?: WidgetConfig;
  onAction?: (action: string, data: any) => void;
}

function DashboardWidget({
  type,
  title,
  data,
  config,
  onAction
}: WidgetProps) {
  const renderContent = () => {
    switch (type) {
      case 'metric':
        return <MetricWidget data={data} config={config} />;
      case 'chart':
        return <ChartWidget data={data} config={config} />;
      case 'list':
        return <ListWidget data={data} config={config} />;
      case 'custom':
        return config.render(data);
    }
  };
  
  return (
    <Card className="dashboard-widget">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <WidgetActions config={config} onAction={onAction} />
      </CardHeader>
      <CardContent>
        {renderContent()}
      </CardContent>
    </Card>
  );
}
```

---

## Component Usage Guidelines

### Selection Criteria
1. **Reusability**: Choose components with >80% reusability
2. **Customization**: Ensure components allow necessary customization
3. **Performance**: Verify component performance metrics
4. **Documentation**: Use well-documented components
5. **Testing**: Select components with comprehensive tests

### Integration Best Practices
1. **Configuration First**: Use configuration over customization
2. **Composition**: Compose smaller components for complex needs
3. **Abstraction**: Create project-specific wrappers when needed
4. **Versioning**: Lock component versions for stability
5. **Monitoring**: Track component usage and performance

### Contribution Guidelines
1. **Generalization**: Make components generic and configurable
2. **Documentation**: Include usage examples and API docs
3. **Testing**: Provide unit and integration tests
4. **Performance**: Include performance benchmarks
5. **Versioning**: Follow semantic versioning

---

*"Build once, use everywhere, customize as needed."* - ModAx Component Philosophy