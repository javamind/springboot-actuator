{
    "/**/favicon.ico"
:
    {
        "bean"
    :
        "faviconHandlerMapping"
    }
,
    "/webjars/**"
:
    {
        "bean"
    :
        "resourceHandlerMapping"
    }
,
    "/**"
:
    {
        "bean"
    :
        "resourceHandlerMapping"
    }
,
    "{[/],methods=[],params=[],headers=[],consumes=[],produces=[],custom=[]}"
:
    {
        "bean"
    :
        "requestMappingHandlerMapping", "method"
    :
        "java.lang.String com.javamind.springboot.JavamindServer.home()"
    }
,
    "{[/error],methods=[],params=[],headers=[],consumes=[],produces=[text/html],custom=[]}"
:
    {
        "bean"
    :
        "requestMappingHandlerMapping", "method"
    :
        "public org.springframework.web.servlet.ModelAndView org.springframework.boot.autoconfigure.web.BasicErrorController.errorHtml(javax.servlet.http.HttpServletRequest)"
    }
,
    "{[/error],methods=[],params=[],headers=[],consumes=[],produces=[],custom=[]}"
:
    {
        "bean"
    :
        "requestMappingHandlerMapping", "method"
    :
        "public org.springframework.http.ResponseEntity<java.util.Map<java.lang.String, java.lang.Object>> org.springframework.boot.autoconfigure.web.BasicErrorController.error(javax.servlet.http.HttpServletRequest)"
    }
,
    "{[/metrics/{name:.*}],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}"
:
    {
        "bean"
    :
        "endpointHandlerMapping", "method"
    :
        "public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.MetricsMvcEndpoint.value(java.lang.String)"
    }
,
    "{[/metrics],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}"
:
    {
        "bean"
    :
        "endpointHandlerMapping", "method"
    :
        "public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()"
    }
,
    "{[/env/{name:.*}],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}"
:
    {
        "bean"
    :
        "endpointHandlerMapping", "method"
    :
        "public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EnvironmentMvcEndpoint.value(java.lang.String)"
    }
,
    "{[/env],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}"
:
    {
        "bean"
    :
        "endpointHandlerMapping", "method"
    :
        "public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()"
    }
,
    "{[/info],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}"
:
    {
        "bean"
    :
        "endpointHandlerMapping", "method"
    :
        "public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()"
    }
,
    "{[/health],methods=[],params=[],headers=[],consumes=[],produces=[],custom=[]}"
:
    {
        "bean"
    :
        "endpointHandlerMapping", "method"
    :
        "public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.HealthMvcEndpoint.invoke()"
    }
,
    "{[/mappings],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}"
:
    {
        "bean"
    :
        "endpointHandlerMapping", "method"
    :
        "public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()"
    }
,
    "{[/autoconfig],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}"
:
    {
        "bean"
    :
        "endpointHandlerMapping", "method"
    :
        "public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()"
    }
,
    "{[/dump],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}"
:
    {
        "bean"
    :
        "endpointHandlerMapping", "method"
    :
        "public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()"
    }
,
    "{[/configprops],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}"
:
    {
        "bean"
    :
        "endpointHandlerMapping", "method"
    :
        "public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()"
    }
,
    "{[/beans],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}"
:
    {
        "bean"
    :
        "endpointHandlerMapping", "method"
    :
        "public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()"
    }
,
    "{[/trace],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}"
:
    {
        "bean"
    :
        "endpointHandlerMapping", "method"
    :
        "public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()"
    }
}