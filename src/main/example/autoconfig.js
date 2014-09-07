{
    "positiveMatches"
:
    {
        "AuditAutoConfiguration.AuditEventRepositoryConfiguration"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.audit.AuditEventRepository; SearchStrategy: all) found no beans"}
        ], "EndpointAutoConfiguration#autoConfigurationAuditEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnBean (types: org.springframework.boot.autoconfigure.condition.ConditionEvaluationReport; SearchStrategy: all) found the following [autoConfigurationReport] @ConditionalOnMissingBean (types: org.springframework.boot.actuate.endpoint.AutoConfigurationReportEndpoint; SearchStrategy: current) found no beans"}
        ], "EndpointAutoConfiguration#beansEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.endpoint.BeansEndpoint; SearchStrategy: all) found no beans"}
        ], "EndpointAutoConfiguration#configurationPropertiesReportEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.endpoint.ConfigurationPropertiesReportEndpoint; SearchStrategy: all) found no beans"}
        ], "EndpointAutoConfiguration#dumpEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.endpoint.DumpEndpoint; SearchStrategy: all) found no beans"}
        ], "EndpointAutoConfiguration#environmentEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.endpoint.EnvironmentEndpoint; SearchStrategy: all) found no beans"}
        ], "EndpointAutoConfiguration#healthEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.endpoint.HealthEndpoint; SearchStrategy: all) found no beans"}
        ], "EndpointAutoConfiguration#infoEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.endpoint.InfoEndpoint; SearchStrategy: all) found no beans"}
        ], "EndpointAutoConfiguration#metricsEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.endpoint.MetricsEndpoint; SearchStrategy: all) found no beans"}
        ], "EndpointAutoConfiguration#shutdownEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.endpoint.ShutdownEndpoint; SearchStrategy: all) found no beans"}
        ], "EndpointAutoConfiguration#traceEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.endpoint.TraceEndpoint; SearchStrategy: all) found no beans"}
        ], "EndpointAutoConfiguration.RequestMappingEndpointConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: org.springframework.web.servlet.handler.AbstractHandlerMethodMapping"}
        ], "EndpointAutoConfiguration.RequestMappingEndpointConfiguration#requestMappingEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.endpoint.RequestMappingEndpoint; SearchStrategy: all) found no beans"}
        ], "EndpointMBeanExportAutoConfiguration"
    :
        [
            {"condition": "OnExpressionCondition", "message": "SpEL expression on org.springframework.boot.actuate.autoconfigure.EndpointMBeanExportAutoConfiguration: ${endpoints.jmx.enabled:true} && ${spring.jmx.enabled:true}"}
        ], "EndpointWebMvcAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: javax.servlet.Servlet,org.springframework.web.servlet.DispatcherServlet"},
            {"condition": "OnWebApplicationCondition", "message": "found web application StandardServletEnvironment"}
        ], "EndpointWebMvcAutoConfiguration#endpointHandlerMapping"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.endpoint.mvc.EndpointHandlerMapping; SearchStrategy: all) found no beans"}
        ], "EndpointWebMvcAutoConfiguration#environmentMvcEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnBean (types: org.springframework.boot.actuate.endpoint.EnvironmentEndpoint; SearchStrategy: all) found the following [environmentEndpoint]"},
            {"condition": "OnExpressionCondition", "message": "SpEL expression: ${endpoints.env.enabled:true}"}
        ], "EndpointWebMvcAutoConfiguration#healthMvcEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnBean (types: org.springframework.boot.actuate.endpoint.HealthEndpoint; SearchStrategy: all) found the following [healthEndpoint]"},
            {"condition": "OnExpressionCondition", "message": "SpEL expression: ${endpoints.health.enabled:true}"}
        ], "EndpointWebMvcAutoConfiguration#metricsMvcEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnBean (types: org.springframework.boot.actuate.endpoint.MetricsEndpoint; SearchStrategy: all) found the following [metricsEndpoint]"},
            {"condition": "OnExpressionCondition", "message": "SpEL expression: ${endpoints.metrics.enabled:true}"}
        ], "EndpointWebMvcAutoConfiguration#mvcEndpoints"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.endpoint.mvc.MvcEndpoints; SearchStrategy: all) found no beans"}
        ], "HealthIndicatorAutoConfiguration#healthAggregator"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.health.HealthAggregator; SearchStrategy: all) found no beans"}
        ], "HealthIndicatorAutoConfiguration#statusHealthIndicator"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.health.HealthIndicator; SearchStrategy: all) found no beans"}
        ], "ManagementServerPropertiesAutoConfiguration#managementServerProperties"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.autoconfigure.ManagementServerProperties; SearchStrategy: all) found no beans"}
        ], "MetricFilterAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: javax.servlet.Servlet,javax.servlet.ServletRegistration"},
            {"condition": "OnBeanCondition", "message": "@ConditionalOnBean (types: org.springframework.boot.actuate.metrics.CounterService,org.springframework.boot.actuate.metrics.GaugeService; SearchStrategy: all) found the following [counterService, gaugeService]"}
        ], "MetricRepositoryAutoConfiguration#counterService"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.metrics.CounterService; SearchStrategy: all) found no beans"}
        ], "MetricRepositoryAutoConfiguration#gaugeService"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.metrics.GaugeService; SearchStrategy: all) found no beans"}
        ], "MetricRepositoryAutoConfiguration.MetricRepositoryConfiguration"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.metrics.repository.MetricRepository; SearchStrategy: all) found no beans"}
        ], "TraceRepositoryAutoConfiguration#traceRepository"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.actuate.trace.TraceRepository; SearchStrategy: all) found no beans"}
        ], "TraceWebFilterAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: javax.servlet.Servlet,org.springframework.web.servlet.DispatcherServlet,javax.servlet.ServletRegistration"}
        ], "PropertyPlaceholderAutoConfiguration#propertySourcesPlaceholderConfigurer"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.context.support.PropertySourcesPlaceholderConfigurer; SearchStrategy: current) found no beans"}
        ], "JacksonAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: com.fasterxml.jackson.databind.ObjectMapper"}
        ], "JacksonAutoConfiguration.JacksonObjectMapperAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: com.fasterxml.jackson.databind.ObjectMapper"}
        ], "JacksonAutoConfiguration.JacksonObjectMapperAutoConfiguration#jacksonObjectMapper"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: com.fasterxml.jackson.databind.ObjectMapper; SearchStrategy: all) found no beans"}
        ], "JmxAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: org.springframework.jmx.export.MBeanExporter"},
            {"condition": "OnExpressionCondition", "message": "SpEL expression on org.springframework.boot.autoconfigure.jmx.JmxAutoConfiguration: ${spring.jmx.enabled:true}"}
        ], "JmxAutoConfiguration#mbeanServer"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: javax.management.MBeanServer; SearchStrategy: all) found no beans"}
        ], "JmxAutoConfiguration#objectNamingStrategy"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.jmx.export.naming.ObjectNamingStrategy; SearchStrategy: all) found no beans"}
        ], "DispatcherServletAutoConfiguration"
    :
        [
            {"condition": "OnWebApplicationCondition", "message": "found web application StandardServletEnvironment"},
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: org.springframework.web.servlet.DispatcherServlet"}
        ], "DispatcherServletAutoConfiguration.DispatcherServletConfiguration"
    :
        [
            {"condition": "DispatcherServletAutoConfiguration.DefaultDispatcherServletCondition", "message": "no ServletRegistrationBean found"},
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: javax.servlet.ServletRegistration"}
        ], "EmbeddedServletContainerAutoConfiguration"
    :
        [
            {"condition": "OnWebApplicationCondition", "message": "found web application StandardServletEnvironment"}
        ], "EmbeddedServletContainerAutoConfiguration.EmbeddedTomcat"
    :
        [
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: javax.servlet.Servlet,org.apache.catalina.startup.Tomcat"},
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.context.embedded.EmbeddedServletContainerFactory; SearchStrategy: current) found no beans"}
        ], "ErrorMvcAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: javax.servlet.Servlet,org.springframework.web.servlet.DispatcherServlet"},
            {"condition": "OnWebApplicationCondition", "message": "found web application StandardServletEnvironment"}
        ], "ErrorMvcAutoConfiguration#basicErrorController"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.autoconfigure.web.ErrorController; SearchStrategy: current) found no beans"}
        ], "ErrorMvcAutoConfiguration#errorAttributes"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.autoconfigure.web.ErrorAttributes; SearchStrategy: current) found no beans"}
        ], "ErrorMvcAutoConfiguration.WhitelabelErrorViewConfiguration"
    :
        [
            {"condition": "ErrorMvcAutoConfiguration.ErrorTemplateMissingCondition", "message": "No error template view detected"},
            {"condition": "OnExpressionCondition", "message": "SpEL expression on org.springframework.boot.autoconfigure.web.ErrorMvcAutoConfiguration$WhitelabelErrorViewConfiguration: ${error.whitelabel.enabled:true}"}
        ], "ErrorMvcAutoConfiguration.WhitelabelErrorViewConfiguration#beanNameViewResolver"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.web.servlet.view.BeanNameViewResolver; SearchStrategy: all) found no beans"}
        ], "ErrorMvcAutoConfiguration.WhitelabelErrorViewConfiguration#defaultErrorView"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (names: error; SearchStrategy: all) found no beans"}
        ], "HttpMessageConvertersAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: org.springframework.http.converter.HttpMessageConverter"}
        ], "HttpMessageConvertersAutoConfiguration#messageConverters"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.autoconfigure.web.HttpMessageConverters; SearchStrategy: all) found no beans"}
        ], "HttpMessageConvertersAutoConfiguration.ObjectMappers"
    :
        [
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: com.fasterxml.jackson.databind.ObjectMapper"}
        ], "HttpMessageConvertersAutoConfiguration.ObjectMappers#mappingJackson2HttpMessageConverter"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.http.converter.json.MappingJackson2HttpMessageConverter; SearchStrategy: all) found no beans"}
        ], "MultipartAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: javax.servlet.Servlet,org.springframework.web.multipart.support.StandardServletMultipartResolver,javax.servlet.MultipartConfigElement"},
            {"condition": "OnExpressionCondition", "message": "SpEL expression on org.springframework.boot.autoconfigure.web.MultipartAutoConfiguration: ${multipart.enabled:true}"}
        ], "MultipartAutoConfiguration#multipartConfigElement"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: javax.servlet.MultipartConfigElement; SearchStrategy: all) found no beans"}
        ], "MultipartAutoConfiguration#multipartResolver"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.web.multipart.support.StandardServletMultipartResolver; SearchStrategy: all) found no beans"}
        ], "ServerPropertiesAutoConfiguration"
    :
        [
            {"condition": "OnWebApplicationCondition", "message": "found web application StandardServletEnvironment"}
        ], "ServerPropertiesAutoConfiguration#serverProperties"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.autoconfigure.web.ServerProperties; SearchStrategy: current) found no beans"}
        ], "WebMvcAutoConfiguration"
    :
        [
            {"condition": "OnWebApplicationCondition", "message": "found web application StandardServletEnvironment"},
            {"condition": "OnClassCondition", "message": "@ConditionalOnClass classes found: javax.servlet.Servlet,org.springframework.web.servlet.DispatcherServlet,org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter"},
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport; SearchStrategy: all) found no beans"}
        ], "WebMvcAutoConfiguration#hiddenHttpMethodFilter"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.web.filter.HiddenHttpMethodFilter; SearchStrategy: all) found no beans"}
        ], "WebMvcAutoConfiguration.WebMvcAutoConfigurationAdapter#beanNameViewResolver"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnBean (types: org.springframework.web.servlet.View; SearchStrategy: all) found the following [error]"}
        ], "WebMvcAutoConfiguration.WebMvcAutoConfigurationAdapter#defaultViewResolver"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.web.servlet.view.InternalResourceViewResolver; SearchStrategy: all) found no beans"}
        ], "WebMvcAutoConfiguration.WebMvcAutoConfigurationAdapter#requestContextListener"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.web.context.request.RequestContextListener; SearchStrategy: all) found no beans"}
        ], "WebMvcAutoConfiguration.WebMvcAutoConfigurationAdapter#viewResolver"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnBean (types: org.springframework.web.servlet.ViewResolver; SearchStrategy: all) found the following [beanNameViewResolver, defaultViewResolver] @ConditionalOnMissingBean (names: viewResolver; SearchStrategy: all) found no beans"}
        ]
    }
,
    "negativeMatches"
:
    {
        "AuditAutoConfiguration#authenticationAuditListener"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.security.authentication.event.AbstractAuthenticationEvent"}
        ], "AuditAutoConfiguration#authorizationAuditListener"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.security.access.event.AbstractAuthorizationEvent"}
        ], "CrshAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.crsh.plugin.PluginLifeCycle"}
        ], "EndpointMBeanExportAutoConfiguration#mbeanServer"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: javax.management.MBeanServer; SearchStrategy: all) found the following [mbeanServer]"}
        ], "EndpointWebMvcAutoConfiguration#shutdownMvcEndpoint"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnBean (types: org.springframework.boot.actuate.endpoint.ShutdownEndpoint; SearchStrategy: all) found the following [shutdownEndpoint]"},
            {"condition": "OnExpressionCondition", "message": "SpEL expression: ${endpoints.shutdown.enabled:false}"}
        ], "HealthIndicatorAutoConfiguration.DataSourcesHealthIndicatorConfiguration"
    :
        [
            {"condition": "OnExpressionCondition", "message": "SpEL expression on org.springframework.boot.actuate.autoconfigure.HealthIndicatorAutoConfiguration$DataSourcesHealthIndicatorConfiguration: ${health.db.enabled:true}"},
            {"condition": "OnBeanCondition", "message": "@ConditionalOnBean (types: javax.sql.DataSource; SearchStrategy: all) found no beans"}
        ], "HealthIndicatorAutoConfiguration.MongoHealthIndicatorConfiguration"
    :
        [
            {"condition": "OnExpressionCondition", "message": "SpEL expression on org.springframework.boot.actuate.autoconfigure.HealthIndicatorAutoConfiguration$MongoHealthIndicatorConfiguration: ${health.mongo.enabled:true}"},
            {"condition": "OnBeanCondition", "message": "@ConditionalOnBean (types: org.springframework.data.mongodb.core.MongoTemplate; SearchStrategy: all) found no beans"}
        ], "HealthIndicatorAutoConfiguration.RabbitHealthIndicatorConfiguration"
    :
        [
            {"condition": "OnExpressionCondition", "message": "SpEL expression on org.springframework.boot.actuate.autoconfigure.HealthIndicatorAutoConfiguration$RabbitHealthIndicatorConfiguration: ${health.rabbit.enabled:true}"},
            {"condition": "OnBeanCondition", "message": "@ConditionalOnBean (types: org.springframework.amqp.rabbit.core.RabbitTemplate; SearchStrategy: all) found no beans"}
        ], "HealthIndicatorAutoConfiguration.RedisHealthIndicatorConfiguration"
    :
        [
            {"condition": "OnExpressionCondition", "message": "SpEL expression on org.springframework.boot.actuate.autoconfigure.HealthIndicatorAutoConfiguration$RedisHealthIndicatorConfiguration: ${health.redis.enabled:true}"},
            {"condition": "OnBeanCondition", "message": "@ConditionalOnBean (types: org.springframework.data.redis.connection.RedisConnectionFactory; SearchStrategy: all) found no beans"}
        ], "HealthIndicatorAutoConfiguration.SolrHealthIndicatorConfiguration"
    :
        [
            {"condition": "OnExpressionCondition", "message": "SpEL expression on org.springframework.boot.actuate.autoconfigure.HealthIndicatorAutoConfiguration$SolrHealthIndicatorConfiguration: ${health.solr.enabled:true}"},
            {"condition": "OnBeanCondition", "message": "@ConditionalOnBean (types: org.apache.solr.client.solrj.SolrServer; SearchStrategy: all) found no beans"}
        ], "JolokiaAutoConfiguration"
    :
        [
            {"condition": "OnWebApplicationCondition", "message": "found web application StandardServletEnvironment"},
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.jolokia.http.AgentServlet"}
        ], "ManagementSecurityAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.security.config.annotation.web.configuration.EnableWebSecurity"}
        ], "ManagementServerPropertiesAutoConfiguration#securityProperties"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.autoconfigure.security.SecurityProperties; SearchStrategy: all) found no beans"},
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.security.config.annotation.web.configuration.EnableWebSecurity"}
        ], "ManagementServerPropertiesAutoConfiguration#serverProperties"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.boot.autoconfigure.web.ServerProperties; SearchStrategy: all) found the following [serverProperties]"}
        ], "MetricRepositoryAutoConfiguration.CodahaleMetricRegistryConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: com.codahale.metrics.MetricRegistry"}
        ], "MetricRepositoryAutoConfiguration.MetricsChannelConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.messaging.MessageChannel"}
        ], "MessageSourceAutoConfiguration"
    :
        [
            {"condition": "MessageSourceAutoConfiguration.ResourceBundleCondition", "message": "No bundle found for spring.messages.basename: messages"}
        ], "RabbitAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.amqp.rabbit.core.RabbitTemplate,com.rabbitmq.client.Channel"}
        ], "AopAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.aspectj.lang.annotation.Aspect,org.aspectj.lang.reflect.Advice"}
        ], "BatchAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.batch.core.launch.JobLauncher,org.springframework.jdbc.core.JdbcOperations"}
        ], "ElasticsearchRepositoriesAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.elasticsearch.client.Client,org.springframework.data.elasticsearch.repository.ElasticsearchRepository"}
        ], "JpaRepositoriesAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.data.jpa.repository.JpaRepository"}
        ], "MongoRepositoriesAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: com.mongodb.Mongo,org.springframework.data.mongodb.repository.MongoRepository"}
        ], "RepositoryRestMvcAutoConfiguration"
    :
        [
            {"condition": "OnWebApplicationCondition", "message": "found web application StandardServletEnvironment"},
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration"}
        ], "SolrRepositoriesAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.apache.solr.client.solrj.SolrServer,org.springframework.data.solr.repository.SolrRepository"}
        ], "ElasticsearchAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.elasticsearch.client.Client,org.springframework.data.elasticsearch.client.TransportClientFactoryBean,org.springframework.data.elasticsearch.client.NodeClientFactoryBean"}
        ], "ElasticsearchDataAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.elasticsearch.client.Client,org.springframework.data.elasticsearch.core.ElasticsearchTemplate"}
        ], "FlywayAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.flywaydb.core.Flyway"}
        ], "FreeMarkerAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: freemarker.template.Configuration,org.springframework.ui.freemarker.FreeMarkerConfigurationFactory"}
        ], "GroovyTemplateAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: groovy.text.TemplateEngine"}
        ], "HypermediaAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.hateoas.Resource,org.springframework.plugin.core.Plugin"}
        ], "IntegrationAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.integration.config.EnableIntegration"}
        ], "JacksonAutoConfiguration.JodaModuleAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: com.fasterxml.jackson.datatype.joda.JodaModule"}
        ], "JacksonAutoConfiguration.Jsr310ModuleAutoConfiguration"
    :
        [
            {"condition": "OnJavaCondition", "message": "Required JVM version 1.8 or newer found 1.8"},
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: com.fasterxml.jackson.datatype.jsr310.JSR310Module"}
        ], "DataSourceAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType"}
        ], "DataSourceTransactionManagerAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.jdbc.core.JdbcTemplate,org.springframework.transaction.PlatformTransactionManager"}
        ], "JmsAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.jms.core.JmsTemplate"}
        ], "ActiveMQAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: javax.jms.ConnectionFactory,org.apache.activemq.ActiveMQConnectionFactory"}
        ], "HornetQAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: javax.jms.ConnectionFactory,org.hornetq.api.jms.HornetQJMSClient"}
        ], "JmxAutoConfiguration#mbeanExporter"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.jmx.export.MBeanExporter; SearchStrategy: current) found the following [mbeanExporter]"}
        ], "LiquibaseAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: liquibase.integration.spring.SpringLiquibase"}
        ], "DeviceDelegatingViewResolverAutoConfiguration"
    :
        [
            {"condition": "OnWebApplicationCondition", "message": "found web application StandardServletEnvironment"},
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.mobile.device.view.LiteDeviceDelegatingViewResolver"}
        ], "DeviceResolverAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.mobile.device.DeviceResolverHandlerInterceptor,org.springframework.mobile.device.DeviceHandlerMethodArgumentResolver"}
        ], "SitePreferenceAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.mobile.device.site.SitePreferenceHandlerInterceptor,org.springframework.mobile.device.site.SitePreferenceHandlerMethodArgumentResolver"}
        ], "MongoAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: com.mongodb.Mongo"}
        ], "MongoDataAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: com.mongodb.Mongo,org.springframework.data.mongodb.core.MongoTemplate"}
        ], "HibernateJpaAutoConfiguration"
    :
        [
            {"condition": "HibernateJpaAutoConfiguration.HibernateEntityManagerCondition", "message": "did not find HibernateEntityManager class"}
        ], "ReactorAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: reactor.spring.context.config.EnableReactor"}
        ], "RedisAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.data.redis.connection.jedis.JedisConnection,org.springframework.data.redis.core.RedisOperations,redis.clients.jedis.Jedis"}
        ], "FallbackWebSecurityAutoConfiguration"
    :
        [
            {"condition": "OnExpressionCondition", "message": "SpEL expression on org.springframework.boot.autoconfigure.security.FallbackWebSecurityAutoConfiguration: !${security.basic.enabled:true}"}
        ], "SecurityAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.security.authentication.AuthenticationManager"}
        ], "FacebookAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.social.config.annotation.SocialConfigurerAdapter,org.springframework.social.facebook.connect.FacebookConnectionFactory"}
        ], "LinkedInAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.social.config.annotation.SocialConfigurerAdapter,org.springframework.social.linkedin.connect.LinkedInConnectionFactory"}
        ], "SocialWebAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.social.connect.web.ConnectController,org.springframework.social.config.annotation.SocialConfigurerAdapter"}
        ], "TwitterAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.social.config.annotation.SocialConfigurerAdapter,org.springframework.social.twitter.connect.TwitterConnectionFactory"}
        ], "SolrAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.apache.solr.client.solrj.impl.HttpSolrServer,org.apache.solr.client.solrj.impl.CloudSolrServer"}
        ], "ThymeleafAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.thymeleaf.spring4.SpringTemplateEngine"}
        ], "VelocityAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.apache.velocity.app.VelocityEngine,org.springframework.ui.velocity.VelocityEngineFactory"}
        ], "EmbeddedServletContainerAutoConfiguration.EmbeddedJetty"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.eclipse.jetty.server.Server,org.eclipse.jetty.util.Loader"}
        ], "WebMvcAutoConfiguration.WebMvcAutoConfigurationAdapter#dateFormatter"
    :
        [
            {"condition": "OnPropertyCondition", "message": "@ConditionalOnProperty missing required properties: date-format not found"}
        ], "WebMvcAutoConfiguration.WebMvcAutoConfigurationAdapter#localeResolver"
    :
        [
            {"condition": "OnBeanCondition", "message": "@ConditionalOnMissingBean (types: org.springframework.web.servlet.LocaleResolver; SearchStrategy: all) found no beans"},
            {"condition": "OnPropertyCondition", "message": "@ConditionalOnProperty missing required properties: locale not found"}
        ], "WebSocketAutoConfiguration"
    :
        [
            {"condition": "OnClassCondition", "message": "required @ConditionalOnClass classes not found: org.springframework.web.socket.WebSocketHandler,org.apache.tomcat.websocket.server.WsSci"}
        ]
    }
}