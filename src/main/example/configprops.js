{
    "metricsEndpoint"
:
    {
        "prefix"
    :
        "endpoints.metrics", "properties"
    :
        {
            "id"
        :
            "metrics", "sensitive"
        :
            true, "enabled"
        :
            true
        }
    }
,
    "dumpEndpoint"
:
    {
        "prefix"
    :
        "endpoints.dump", "properties"
    :
        {
            "id"
        :
            "dump", "sensitive"
        :
            true, "enabled"
        :
            true
        }
    }
,
    "spring.resources.CONFIGURATION_PROPERTIES"
:
    {
        "prefix"
    :
        "spring.resources", "properties"
    :
        {
            "cachePeriod"
        :
            null, "addMappings"
        :
            true
        }
    }
,
    "shutdownEndpoint"
:
    {
        "prefix"
    :
        "endpoints.shutdown", "properties"
    :
        {
            "id"
        :
            "shutdown", "sensitive"
        :
            true, "enabled"
        :
            false
        }
    }
,
    "environmentEndpoint"
:
    {
        "prefix"
    :
        "endpoints.env", "properties"
    :
        {
            "id"
        :
            "env", "sensitive"
        :
            true, "enabled"
        :
            true
        }
    }
,
    "beansEndpoint"
:
    {
        "prefix"
    :
        "endpoints.beans", "properties"
    :
        {
            "id"
        :
            "beans", "sensitive"
        :
            true, "enabled"
        :
            true
        }
    }
,
    "endpoints.health.CONFIGURATION_PROPERTIES"
:
    {
        "prefix"
    :
        "endpoints.health", "properties"
    :
        {
        }
    }
,
    "traceEndpoint"
:
    {
        "prefix"
    :
        "endpoints.trace", "properties"
    :
        {
            "id"
        :
            "trace", "sensitive"
        :
            true, "enabled"
        :
            true
        }
    }
,
    "infoEndpoint"
:
    {
        "prefix"
    :
        "endpoints.info", "properties"
    :
        {
            "id"
        :
            "info", "sensitive"
        :
            false, "enabled"
        :
            true
        }
    }
,
    "autoConfigurationAuditEndpoint"
:
    {
        "prefix"
    :
        "endpoints.autoconfig", "properties"
    :
        {
            "id"
        :
            "autoconfig", "sensitive"
        :
            true, "enabled"
        :
            true
        }
    }
,
    "spring.mvc.CONFIGURATION_PROPERTIES"
:
    {
        "prefix"
    :
        "spring.mvc", "properties"
    :
        {
            "messageCodesResolverFormat"
        :
            null, "locale"
        :
            null, "dateFormat"
        :
            null
        }
    }
,
    "managementServerProperties"
:
    {
        "prefix"
    :
        "management", "properties"
    :
        {
            "port"
        :
            null, "contextPath"
        :
            "", "addApplicationContextHeader"
        :
            true
        }
    }
,
    "requestMappingEndpoint"
:
    {
        "prefix"
    :
        "endpoints.mappings", "properties"
    :
        {
            "id"
        :
            "mappings", "sensitive"
        :
            true, "enabled"
        :
            true
        }
    }
,
    "endpoints.jmx.CONFIGURATION_PROPERTIES"
:
    {
        "prefix"
    :
        "endpoints.jmx", "properties"
    :
        {
            "domain"
        :
            "", "uniqueNames"
        :
            false, "enabled"
        :
            true
        }
    }
,
    "http.mappers.CONFIGURATION_PROPERTIES"
:
    {
        "prefix"
    :
        "http.mappers", "properties"
    :
        {
            "jsonPrettyPrint"
        :
            false, "jsonSortKeys"
        :
            false
        }
    }
,
    "serverProperties"
:
    {
        "prefix"
    :
        "server", "properties"
    :
        {
            "port"
        :
            null, "sessionTimeout"
        :
            null, "contextPath"
        :
            null, "servletPath"
        :
            "/"
        }
    }
,
    "multipart.CONFIGURATION_PROPERTIES"
:
    {
        "prefix"
    :
        "multipart", "properties"
    :
        {
            "location"
        :
            null, "maxFileSize"
        :
            "1Mb", "maxRequestSize"
        :
            "10Mb", "fileSizeThreshold"
        :
            "0"
        }
    }
,
    "configurationPropertiesReportEndpoint"
:
    {
        "prefix"
    :
        "endpoints.configprops", "properties"
    :
        {
            "id"
        :
            "configprops", "sensitive"
        :
            true, "enabled"
        :
            true
        }
    }
,
    "healthEndpoint"
:
    {
        "prefix"
    :
        "endpoints.health", "properties"
    :
        {
            "id"
        :
            "health", "sensitive"
        :
            false, "enabled"
        :
            true
        }
    }
}