[
    {"threadName": "http-nio-8080-exec-5", "threadId": 26, "blockedTime": -1, "blockedCount": 0, "waitedTime": -1, "waitedCount": 0, "lockName": null, "lockOwnerId": -1, "lockOwnerName": null, "inNative": false, "suspended": false, "threadState": "RUNNABLE", "stackTrace": [
        {"methodName": "dumpThreads0", "fileName": "ThreadImpl.java", "lineNumber": -2, "className": "sun.management.ThreadImpl", "nativeMethod": true},
        {"methodName": "dumpAllThreads", "fileName": "ThreadImpl.java", "lineNumber": 446, "className": "sun.management.ThreadImpl", "nativeMethod": false},
        {"methodName": "invoke", "fileName": "DumpEndpoint.java", "lineNumber": 43, "className": "org.springframework.boot.actuate.endpoint.DumpEndpoint", "nativeMethod": false},
        {"methodName": "invoke", "fileName": "DumpEndpoint.java", "lineNumber": 31, "className": "org.springframework.boot.actuate.endpoint.DumpEndpoint", "nativeMethod": false},
        {"methodName": "invoke", "fileName": "EndpointMvcAdapter.java", "lineNumber": 56, "className": "org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter", "nativeMethod": false},
        {"methodName": "invoke0", "fileName": "NativeMethodAccessorImpl.java", "lineNumber": -2, "className": "sun.reflect.NativeMethodAccessorImpl", "nativeMethod": true},
        {"methodName": "invoke", "fileName": "NativeMethodAccessorImpl.java", "lineNumber": 62, "className": "sun.reflect.NativeMethodAccessorImpl", "nativeMethod": false},
        {"methodName": "invoke", "fileName": "DelegatingMethodAccessorImpl.java", "lineNumber": 43, "className": "sun.reflect.DelegatingMethodAccessorImpl", "nativeMethod": false},
        {"methodName": "invoke", "fileName": "Method.java", "lineNumber": 483, "className": "java.lang.reflect.Method", "nativeMethod": false},
        {"methodName": "invoke", "fileName": "InvocableHandlerMethod.java", "lineNumber": 215, "className": "org.springframework.web.method.support.InvocableHandlerMethod", "nativeMethod": false},
        {"methodName": "invokeForRequest", "fileName": "InvocableHandlerMethod.java", "lineNumber": 132, "className": "org.springframework.web.method.support.InvocableHandlerMethod", "nativeMethod": false},
        {"methodName": "invokeAndHandle", "fileName": "ServletInvocableHandlerMethod.java", "lineNumber": 104, "className": "org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod", "nativeMethod": false},
        {"methodName": "invokeHandleMethod", "fileName": "RequestMappingHandlerAdapter.java", "lineNumber": 749, "className": "org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter", "nativeMethod": false},
        {"methodName": "handleInternal", "fileName": "RequestMappingHandlerAdapter.java", "lineNumber": 689, "className": "org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter", "nativeMethod": false},
        {"methodName": "handle", "fileName": "AbstractHandlerMethodAdapter.java", "lineNumber": 83, "className": "org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter", "nativeMethod": false},
        {"methodName": "doDispatch", "fileName": "DispatcherServlet.java", "lineNumber": 938, "className": "org.springframework.web.servlet.DispatcherServlet", "nativeMethod": false},
        {"methodName": "doService", "fileName": "DispatcherServlet.java", "lineNumber": 870, "className": "org.springframework.web.servlet.DispatcherServlet", "nativeMethod": false},
        {"methodName": "processRequest", "fileName": "FrameworkServlet.java", "lineNumber": 961, "className": "org.springframework.web.servlet.FrameworkServlet", "nativeMethod": false},
        {"methodName": "doGet", "fileName": "FrameworkServlet.java", "lineNumber": 852, "className": "org.springframework.web.servlet.FrameworkServlet", "nativeMethod": false},
        {"methodName": "service", "fileName": "HttpServlet.java", "lineNumber": 620, "className": "javax.servlet.http.HttpServlet", "nativeMethod": false},
        {"methodName": "service", "fileName": "FrameworkServlet.java", "lineNumber": 837, "className": "org.springframework.web.servlet.FrameworkServlet", "nativeMethod": false},
        {"methodName": "service", "fileName": "HttpServlet.java", "lineNumber": 727, "className": "javax.servlet.http.HttpServlet", "nativeMethod": false},
        {"methodName": "internalDoFilter", "fileName": "ApplicationFilterChain.java", "lineNumber": 303, "className": "org.apache.catalina.core.ApplicationFilterChain", "nativeMethod": false},
        {"methodName": "doFilter", "fileName": "ApplicationFilterChain.java", "lineNumber": 208, "className": "org.apache.catalina.core.ApplicationFilterChain", "nativeMethod": false},
        {"methodName": "doFilterInternal", "fileName": "WebRequestTraceFilter.java", "lineNumber": 110, "className": "org.springframework.boot.actuate.trace.WebRequestTraceFilter", "nativeMethod": false},
        {"methodName": "doFilter", "fileName": "OncePerRequestFilter.java", "lineNumber": 107, "className": "org.springframework.web.filter.OncePerRequestFilter", "nativeMethod": false},
        {"methodName": "internalDoFilter", "fileName": "ApplicationFilterChain.java", "lineNumber": 241, "className": "org.apache.catalina.core.ApplicationFilterChain", "nativeMethod": false},
        {"methodName": "doFilter", "fileName": "ApplicationFilterChain.java", "lineNumber": 208, "className": "org.apache.catalina.core.ApplicationFilterChain", "nativeMethod": false},
        {"methodName": "doFilterInternal", "fileName": "EndpointWebMvcAutoConfiguration.java", "lineNumber": 280, "className": "org.springframework.boot.actuate.autoconfigure.EndpointWebMvcAutoConfiguration$ApplicationContextHeaderFilter", "nativeMethod": false},
        {"methodName": "doFilter", "fileName": "OncePerRequestFilter.java", "lineNumber": 107, "className": "org.springframework.web.filter.OncePerRequestFilter", "nativeMethod": false},
        {"methodName": "internalDoFilter", "fileName": "ApplicationFilterChain.java", "lineNumber": 241, "className": "org.apache.catalina.core.ApplicationFilterChain", "nativeMethod": false},
        {"methodName": "doFilter", "fileName": "ApplicationFilterChain.java", "lineNumber": 208, "className": "org.apache.catalina.core.ApplicationFilterChain", "nativeMethod": false},
        {"methodName": "doFilterInternal", "fileName": "HiddenHttpMethodFilter.java", "lineNumber": 77, "className": "org.springframework.web.filter.HiddenHttpMethodFilter", "nativeMethod": false},
        {"methodName": "doFilter", "fileName": "OncePerRequestFilter.java", "lineNumber": 107, "className": "org.springframework.web.filter.OncePerRequestFilter", "nativeMethod": false},
        {"methodName": "internalDoFilter", "fileName": "ApplicationFilterChain.java", "lineNumber": 241, "className": "org.apache.catalina.core.ApplicationFilterChain", "nativeMethod": false},
        {"methodName": "doFilter", "fileName": "ApplicationFilterChain.java", "lineNumber": 208, "className": "org.apache.catalina.core.ApplicationFilterChain", "nativeMethod": false},
        {"methodName": "doFilterInternal", "fileName": "MetricFilterAutoConfiguration.java", "lineNumber": 89, "className": "org.springframework.boot.actuate.autoconfigure.MetricFilterAutoConfiguration$MetricsFilter", "nativeMethod": false},
        {"methodName": "doFilter", "fileName": "OncePerRequestFilter.java", "lineNumber": 107, "className": "org.springframework.web.filter.OncePerRequestFilter", "nativeMethod": false},
        {"methodName": "internalDoFilter", "fileName": "ApplicationFilterChain.java", "lineNumber": 241, "className": "org.apache.catalina.core.ApplicationFilterChain", "nativeMethod": false},
        {"methodName": "doFilter", "fileName": "ApplicationFilterChain.java", "lineNumber": 208, "className": "org.apache.catalina.core.ApplicationFilterChain", "nativeMethod": false},
        {"methodName": "invoke", "fileName": "StandardWrapperValve.java", "lineNumber": 220, "className": "org.apache.catalina.core.StandardWrapperValve", "nativeMethod": false},
        {"methodName": "invoke", "fileName": "StandardContextValve.java", "lineNumber": 122, "className": "org.apache.catalina.core.StandardContextValve", "nativeMethod": false},
        {"methodName": "invoke", "fileName": "AuthenticatorBase.java", "lineNumber": 501, "className": "org.apache.catalina.authenticator.AuthenticatorBase", "nativeMethod": false},
        {"methodName": "invoke", "fileName": "RemoteIpValve.java", "lineNumber": 683, "className": "org.apache.catalina.valves.RemoteIpValve", "nativeMethod": false},
        {"methodName": "invoke", "fileName": "StandardHostValve.java", "lineNumber": 171, "className": "org.apache.catalina.core.StandardHostValve", "nativeMethod": false},
        {"methodName": "invoke", "fileName": "ErrorReportValve.java", "lineNumber": 102, "className": "org.apache.catalina.valves.ErrorReportValve", "nativeMethod": false},
        {"methodName": "invoke", "fileName": "StandardEngineValve.java", "lineNumber": 116, "className": "org.apache.catalina.core.StandardEngineValve", "nativeMethod": false},
        {"methodName": "service", "fileName": "CoyoteAdapter.java", "lineNumber": 408, "className": "org.apache.catalina.connector.CoyoteAdapter", "nativeMethod": false},
        {"methodName": "process", "fileName": "AbstractHttp11Processor.java", "lineNumber": 1040, "className": "org.apache.coyote.http11.AbstractHttp11Processor", "nativeMethod": false},
        {"methodName": "process", "fileName": "AbstractProtocol.java", "lineNumber": 607, "className": "org.apache.coyote.AbstractProtocol$AbstractConnectionHandler", "nativeMethod": false},
        {"methodName": "doRun", "fileName": "NioEndpoint.java", "lineNumber": 1720, "className": "org.apache.tomcat.util.net.NioEndpoint$SocketProcessor", "nativeMethod": false},
        {"methodName": "run", "fileName": "NioEndpoint.java", "lineNumber": 1679, "className": "org.apache.tomcat.util.net.NioEndpoint$SocketProcessor", "nativeMethod": false},
        {"methodName": "runWorker", "fileName": "ThreadPoolExecutor.java", "lineNumber": 1142, "className": "java.util.concurrent.ThreadPoolExecutor", "nativeMethod": false},
        {"methodName": "run", "fileName": "ThreadPoolExecutor.java", "lineNumber": 617, "className": "java.util.concurrent.ThreadPoolExecutor$Worker", "nativeMethod": false},
        {"methodName": "run", "fileName": "TaskThread.java", "lineNumber": 61, "className": "org.apache.tomcat.util.threads.TaskThread$WrappingRunnable", "nativeMethod": false},
        {"methodName": "run", "fileName": "Thread.java", "lineNumber": 745, "className": "java.lang.Thread", "nativeMethod": false}
    ], "lockedMonitors": [
        {"className": "org.apache.tomcat.util.net.NioChannel", "identityHashCode": 1369257027, "lockedStackDepth": 51, "lockedStackFrame": {"methodName": "run", "fileName": "NioEndpoint.java", "lineNumber": 1679, "className": "org.apache.tomcat.util.net.NioEndpoint$SocketProcessor", "nativeMethod": false}}
    ], "lockedSynchronizers": [
        {"className": "java.util.concurrent.ThreadPoolExecutor$Worker", "identityHashCode": 1296403794}
    ], "lockInfo": null},
    {"threadName": "http-nio-8080-exec-4", "threadId": 25, "blockedTime": -1, "blockedCount": 0, "waitedTime": -1, "waitedCount": 1, "lockName": "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject@a71f783", "lockOwnerId": -1, "lockOwnerName": null, "inNative": false, "suspended": false, "threadState": "WAITING", "stackTrace": [
        {"methodName": "park", "fileName": "Unsafe.java", "lineNumber": -2, "className": "sun.misc.Unsafe", "nativeMethod": true},
        {"methodName": "park", "fileName": "LockSupport.java", "lineNumber": 175, "className": "java.util.concurrent.locks.LockSupport", "nativeMethod": false},
        {"methodName": "await", "fileName": "AbstractQueuedSynchronizer.java", "lineNumber": 2039, "className": "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject", "nativeMethod": false},
        {"methodName": "take", "fileName": "LinkedBlockingQueue.java", "lineNumber": 442, "className": "java.util.concurrent.LinkedBlockingQueue", "nativeMethod": false},
        {"methodName": "take", "fileName": "TaskQueue.java", "lineNumber": 104, "className": "org.apache.tomcat.util.threads.TaskQueue", "nativeMethod": false},
        {"methodName": "take", "fileName": "TaskQueue.java", "lineNumber": 32, "className": "org.apache.tomcat.util.threads.TaskQueue", "nativeMethod": false},
        {"methodName": "getTask", "fileName": "ThreadPoolExecutor.java", "lineNumber": 1067, "className": "java.util.concurrent.ThreadPoolExecutor", "nativeMethod": false},
        {"methodName": "runWorker", "fileName": "ThreadPoolExecutor.java", "lineNumber": 1127, "className": "java.util.concurrent.ThreadPoolExecutor", "nativeMethod": false},
        {"methodName": "run", "fileName": "ThreadPoolExecutor.java", "lineNumber": 617, "className": "java.util.concurrent.ThreadPoolExecutor$Worker", "nativeMethod": false},
        {"methodName": "run", "fileName": "TaskThread.java", "lineNumber": 61, "className": "org.apache.tomcat.util.threads.TaskThread$WrappingRunnable", "nativeMethod": false},
        {"methodName": "run", "fileName": "Thread.java", "lineNumber": 745, "className": "java.lang.Thread", "nativeMethod": false}
    ], "lockedMonitors": [], "lockedSynchronizers": [], "lockInfo": {"className": "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject", "identityHashCode": 175241091}},
    {"threadName": "http-nio-8080-exec-3", "threadId": 24, "blockedTime": -1, "blockedCount": 0, "waitedTime": -1, "waitedCount": 1, "lockName": "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject@a71f783", "lockOwnerId": -1, "lockOwnerName": null, "inNative": false, "suspended": false, "threadState": "WAITING", "stackTrace": [
        {"methodName": "park", "fileName": "Unsafe.java", "lineNumber": -2, "className": "sun.misc.Unsafe", "nativeMethod": true},
        {"methodName": "park", "fileName": "LockSupport.java", "lineNumber": 175, "className": "java.util.concurrent.locks.LockSupport", "nativeMethod": false},
        {"methodName": "await", "fileName": "AbstractQueuedSynchronizer.java", "lineNumber": 2039, "className": "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject", "nativeMethod": false},
        {"methodName": "take", "fileName": "LinkedBlockingQueue.java", "lineNumber": 442, "className": "java.util.concurrent.LinkedBlockingQueue", "nativeMethod": false},
        {"methodName": "take", "fileName": "TaskQueue.java", "lineNumber": 104, "className": "org.apache.tomcat.util.threads.TaskQueue", "nativeMethod": false},
        {"methodName": "take", "fileName": "TaskQueue.java", "lineNumber": 32, "className": "org.apache.tomcat.util.threads.TaskQueue", "nativeMethod": false},
        {"methodName": "getTask", "fileName": "ThreadPoolExecutor.java", "lineNumber": 1067, "className": "java.util.concurrent.ThreadPoolExecutor", "nativeMethod": false},
        {"methodName": "runWorker", "fileName": "ThreadPoolExecutor.java", "lineNumber": 1127, "className": "java.util.concurrent.ThreadPoolExecutor", "nativeMethod": false},
        {"methodName": "run", "fileName": "ThreadPoolExecutor.java", "lineNumber": 617, "className": "java.util.concurrent.ThreadPoolExecutor$Worker", "nativeMethod": false},
        {"methodName": "run", "fileName": "TaskThread.java", "lineNumber": 61, "className": "org.apache.tomcat.util.threads.TaskThread$WrappingRunnable", "nativeMethod": false},
        {"methodName": "run", "fileName": "Thread.java", "lineNumber": 745, "className": "java.lang.Thread", "nativeMethod": false}
    ], "lockedMonitors": [], "lockedSynchronizers": [], "lockInfo": {"className": "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject", "identityHashCode": 175241091}},
    {"threadName": "http-nio-8080-exec-2", "threadId": 23, "blockedTime": -1, "blockedCount": 40, "waitedTime": -1, "waitedCount": 1, "lockName": "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject@a71f783", "lockOwnerId": -1, "lockOwnerName": null, "inNative": false, "suspended": false, "threadState": "WAITING", "stackTrace": [
        {"methodName": "park", "fileName": "Unsafe.java", "lineNumber": -2, "className": "sun.misc.Unsafe", "nativeMethod": true},
        {"methodName": "park", "fileName": "LockSupport.java", "lineNumber": 175, "className": "java.util.concurrent.locks.LockSupport", "nativeMethod": false},
        {"methodName": "await", "fileName": "AbstractQueuedSynchronizer.java", "lineNumber": 2039, "className": "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject", "nativeMethod": false},
        {"methodName": "take", "fileName": "LinkedBlockingQueue.java", "lineNumber": 442, "className": "java.util.concurrent.LinkedBlockingQueue", "nativeMethod": false},
        {"methodName": "take", "fileName": "TaskQueue.java", "lineNumber": 104, "className": "org.apache.tomcat.util.threads.TaskQueue", "nativeMethod": false},
        {"methodName": "take", "fileName": "TaskQueue.java", "lineNumber": 32, "className": "org.apache.tomcat.util.threads.TaskQueue", "nativeMethod": false},
        {"methodName": "getTask", "fileName": "ThreadPoolExecutor.java", "lineNumber": 1067, "className": "java.util.concurrent.ThreadPoolExecutor", "nativeMethod": false},
        {"methodName": "runWorker", "fileName": "ThreadPoolExecutor.java", "lineNumber": 1127, "className": "java.util.concurrent.ThreadPoolExecutor", "nativeMethod": false},
        {"methodName": "run", "fileName": "ThreadPoolExecutor.java", "lineNumber": 617, "className": "java.util.concurrent.ThreadPoolExecutor$Worker", "nativeMethod": false},
        {"methodName": "run", "fileName": "TaskThread.java", "lineNumber": 61, "className": "org.apache.tomcat.util.threads.TaskThread$WrappingRunnable", "nativeMethod": false},
        {"methodName": "run", "fileName": "Thread.java", "lineNumber": 745, "className": "java.lang.Thread", "nativeMethod": false}
    ], "lockedMonitors": [], "lockedSynchronizers": [], "lockInfo": {"className": "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject", "identityHashCode": 175241091}},
    {"threadName": "http-nio-8080-exec-1", "threadId": 22, "blockedTime": -1, "blockedCount": 51, "waitedTime": -1, "waitedCount": 1, "lockName": "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject@a71f783", "lockOwnerId": -1, "lockOwnerName": null, "inNative": false, "suspended": false, "threadState": "WAITING", "stackTrace": [
        {"methodName": "park", "fileName": "Unsafe.java", "lineNumber": -2, "className": "sun.misc.Unsafe", "nativeMethod": true},
        {"methodName": "park", "fileName": "LockSupport.java", "lineNumber": 175, "className": "java.util.concurrent.locks.LockSupport", "nativeMethod": false},
        {"methodName": "await", "fileName": "AbstractQueuedSynchronizer.java", "lineNumber": 2039, "className": "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject", "nativeMethod": false},
        {"methodName": "take", "fileName": "LinkedBlockingQueue.java", "lineNumber": 442, "className": "java.util.concurrent.LinkedBlockingQueue", "nativeMethod": false},
        {"methodName": "take", "fileName": "TaskQueue.java", "lineNumber": 104, "className": "org.apache.tomcat.util.threads.TaskQueue", "nativeMethod": false},
        {"methodName": "take", "fileName": "TaskQueue.java", "lineNumber": 32, "className": "org.apache.tomcat.util.threads.TaskQueue", "nativeMethod": false},
        {"methodName": "getTask", "fileName": "ThreadPoolExecutor.java", "lineNumber": 1067, "className": "java.util.concurrent.ThreadPoolExecutor", "nativeMethod": false},
        {"methodName": "runWorker", "fileName": "ThreadPoolExecutor.java", "lineNumber": 1127, "className": "java.util.concurrent.ThreadPoolExecutor", "nativeMethod": false},
        {"methodName": "run", "fileName": "ThreadPoolExecutor.java", "lineNumber": 617, "className": "java.util.concurrent.ThreadPoolExecutor$Worker", "nativeMethod": false},
        {"methodName": "run", "fileName": "TaskThread.java", "lineNumber": 61, "className": "org.apache.tomcat.util.threads.TaskThread$WrappingRunnable", "nativeMethod": false},
        {"methodName": "run", "fileName": "Thread.java", "lineNumber": 745, "className": "java.lang.Thread", "nativeMethod": false}
    ], "lockedMonitors": [], "lockedSynchronizers": [], "lockInfo": {"className": "java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject", "identityHashCode": 175241091}},
    {"threadName": "DestroyJavaVM", "threadId": 21, "blockedTime": -1, "blockedCount": 0, "waitedTime": -1, "waitedCount": 0, "lockName": null, "lockOwnerId": -1, "lockOwnerName": null, "inNative": false, "suspended": false, "threadState": "RUNNABLE", "stackTrace": [], "lockedMonitors": [], "lockedSynchronizers": [], "lockInfo": null},
    {"threadName": "http-nio-8080-Acceptor-0", "threadId": 20, "blockedTime": -1, "blockedCount": 0, "waitedTime": -1, "waitedCount": 0, "lockName": null, "lockOwnerId": -1, "lockOwnerName": null, "inNative": true, "suspended": false, "threadState": "RUNNABLE", "stackTrace": [
        {"methodName": "accept0", "fileName": "ServerSocketChannelImpl.java", "lineNumber": -2, "className": "sun.nio.ch.ServerSocketChannelImpl", "nativeMethod": true},
        {"methodName": "accept", "fileName": "ServerSocketChannelImpl.java", "lineNumber": 241, "className": "sun.nio.ch.ServerSocketChannelImpl", "nativeMethod": false},
        {"methodName": "run", "fileName": "NioEndpoint.java", "lineNumber": 793, "className": "org.apache.tomcat.util.net.NioEndpoint$Acceptor", "nativeMethod": false},
        {"methodName": "run", "fileName": "Thread.java", "lineNumber": 745, "className": "java.lang.Thread", "nativeMethod": false}
    ], "lockedMonitors": [
        {"className": "java.lang.Object", "identityHashCode": 79038653, "lockedStackDepth": 1, "lockedStackFrame": {"methodName": "accept", "fileName": "ServerSocketChannelImpl.java", "lineNumber": 241, "className": "sun.nio.ch.ServerSocketChannelImpl", "nativeMethod": false}}
    ], "lockedSynchronizers": [], "lockInfo": null},
    {"threadName": "http-nio-8080-ClientPoller-1", "threadId": 19, "blockedTime": -1, "blockedCount": 0, "waitedTime": -1, "waitedCount": 0, "lockName": null, "lockOwnerId": -1, "lockOwnerName": null, "inNative": true, "suspended": false, "threadState": "RUNNABLE", "stackTrace": [
        {"methodName": "epollWait", "fileName": "EPollArrayWrapper.java", "lineNumber": -2, "className": "sun.nio.ch.EPollArrayWrapper", "nativeMethod": true},
        {"methodName": "poll", "fileName": "EPollArrayWrapper.java", "lineNumber": 269, "className": "sun.nio.ch.EPollArrayWrapper", "nativeMethod": false},
        {"methodName": "doSelect", "fileName": "EPollSelectorImpl.java", "lineNumber": 79, "className": "sun.nio.ch.EPollSelectorImpl", "nativeMethod": false},
        {"methodName": "lockAndDoSelect", "fileName": "SelectorImpl.java", "lineNumber": 86, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false},
        {"methodName": "select", "fileName": "SelectorImpl.java", "lineNumber": 97, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false},
        {"methodName": "run", "fileName": "NioEndpoint.java", "lineNumber": 1163, "className": "org.apache.tomcat.util.net.NioEndpoint$Poller", "nativeMethod": false},
        {"methodName": "run", "fileName": "Thread.java", "lineNumber": 745, "className": "java.lang.Thread", "nativeMethod": false}
    ], "lockedMonitors": [
        {"className": "sun.nio.ch.Util$2", "identityHashCode": 9018611, "lockedStackDepth": 3, "lockedStackFrame": {"methodName": "lockAndDoSelect", "fileName": "SelectorImpl.java", "lineNumber": 86, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false}},
        {"className": "java.util.Collections$UnmodifiableSet", "identityHashCode": 1166738054, "lockedStackDepth": 3, "lockedStackFrame": {"methodName": "lockAndDoSelect", "fileName": "SelectorImpl.java", "lineNumber": 86, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false}},
        {"className": "sun.nio.ch.EPollSelectorImpl", "identityHashCode": 1086535771, "lockedStackDepth": 3, "lockedStackFrame": {"methodName": "lockAndDoSelect", "fileName": "SelectorImpl.java", "lineNumber": 86, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false}}
    ], "lockedSynchronizers": [], "lockInfo": null},
    {"threadName": "http-nio-8080-ClientPoller-0", "threadId": 18, "blockedTime": -1, "blockedCount": 0, "waitedTime": -1, "waitedCount": 0, "lockName": null, "lockOwnerId": -1, "lockOwnerName": null, "inNative": true, "suspended": false, "threadState": "RUNNABLE", "stackTrace": [
        {"methodName": "epollWait", "fileName": "EPollArrayWrapper.java", "lineNumber": -2, "className": "sun.nio.ch.EPollArrayWrapper", "nativeMethod": true},
        {"methodName": "poll", "fileName": "EPollArrayWrapper.java", "lineNumber": 269, "className": "sun.nio.ch.EPollArrayWrapper", "nativeMethod": false},
        {"methodName": "doSelect", "fileName": "EPollSelectorImpl.java", "lineNumber": 79, "className": "sun.nio.ch.EPollSelectorImpl", "nativeMethod": false},
        {"methodName": "lockAndDoSelect", "fileName": "SelectorImpl.java", "lineNumber": 86, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false},
        {"methodName": "select", "fileName": "SelectorImpl.java", "lineNumber": 97, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false},
        {"methodName": "run", "fileName": "NioEndpoint.java", "lineNumber": 1163, "className": "org.apache.tomcat.util.net.NioEndpoint$Poller", "nativeMethod": false},
        {"methodName": "run", "fileName": "Thread.java", "lineNumber": 745, "className": "java.lang.Thread", "nativeMethod": false}
    ], "lockedMonitors": [
        {"className": "sun.nio.ch.Util$2", "identityHashCode": 1946428190, "lockedStackDepth": 3, "lockedStackFrame": {"methodName": "lockAndDoSelect", "fileName": "SelectorImpl.java", "lineNumber": 86, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false}},
        {"className": "java.util.Collections$UnmodifiableSet", "identityHashCode": 950421353, "lockedStackDepth": 3, "lockedStackFrame": {"methodName": "lockAndDoSelect", "fileName": "SelectorImpl.java", "lineNumber": 86, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false}},
        {"className": "sun.nio.ch.EPollSelectorImpl", "identityHashCode": 631569865, "lockedStackDepth": 3, "lockedStackFrame": {"methodName": "lockAndDoSelect", "fileName": "SelectorImpl.java", "lineNumber": 86, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false}}
    ], "lockedSynchronizers": [], "lockInfo": null},
    {"threadName": "NioBlockingSelector.BlockPoller-1", "threadId": 17, "blockedTime": -1, "blockedCount": 0, "waitedTime": -1, "waitedCount": 0, "lockName": null, "lockOwnerId": -1, "lockOwnerName": null, "inNative": true, "suspended": false, "threadState": "RUNNABLE", "stackTrace": [
        {"methodName": "epollWait", "fileName": "EPollArrayWrapper.java", "lineNumber": -2, "className": "sun.nio.ch.EPollArrayWrapper", "nativeMethod": true},
        {"methodName": "poll", "fileName": "EPollArrayWrapper.java", "lineNumber": 269, "className": "sun.nio.ch.EPollArrayWrapper", "nativeMethod": false},
        {"methodName": "doSelect", "fileName": "EPollSelectorImpl.java", "lineNumber": 79, "className": "sun.nio.ch.EPollSelectorImpl", "nativeMethod": false},
        {"methodName": "lockAndDoSelect", "fileName": "SelectorImpl.java", "lineNumber": 86, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false},
        {"methodName": "select", "fileName": "SelectorImpl.java", "lineNumber": 97, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false},
        {"methodName": "run", "fileName": "NioBlockingSelector.java", "lineNumber": 339, "className": "org.apache.tomcat.util.net.NioBlockingSelector$BlockPoller", "nativeMethod": false}
    ], "lockedMonitors": [
        {"className": "sun.nio.ch.Util$2", "identityHashCode": 2096896198, "lockedStackDepth": 3, "lockedStackFrame": {"methodName": "lockAndDoSelect", "fileName": "SelectorImpl.java", "lineNumber": 86, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false}},
        {"className": "java.util.Collections$UnmodifiableSet", "identityHashCode": 699783316, "lockedStackDepth": 3, "lockedStackFrame": {"methodName": "lockAndDoSelect", "fileName": "SelectorImpl.java", "lineNumber": 86, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false}},
        {"className": "sun.nio.ch.EPollSelectorImpl", "identityHashCode": 597839812, "lockedStackDepth": 3, "lockedStackFrame": {"methodName": "lockAndDoSelect", "fileName": "SelectorImpl.java", "lineNumber": 86, "className": "sun.nio.ch.SelectorImpl", "nativeMethod": false}}
    ], "lockedSynchronizers": [], "lockInfo": null},
    {"threadName": "container-0", "threadId": 16, "blockedTime": -1, "blockedCount": 0, "waitedTime": -1, "waitedCount": 8, "lockName": null, "lockOwnerId": -1, "lockOwnerName": null, "inNative": false, "suspended": false, "threadState": "TIMED_WAITING", "stackTrace": [
        {"methodName": "sleep", "fileName": "Thread.java", "lineNumber": -2, "className": "java.lang.Thread", "nativeMethod": true},
        {"methodName": "await", "fileName": "StandardServer.java", "lineNumber": 413, "className": "org.apache.catalina.core.StandardServer", "nativeMethod": false},
        {"methodName": "run", "fileName": "TomcatEmbeddedServletContainer.java", "lineNumber": 140, "className": "org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainer$1", "nativeMethod": false}
    ], "lockedMonitors": [], "lockedSynchronizers": [], "lockInfo": null},
    {"threadName": "ContainerBackgroundProcessor[StandardEngine[Tomcat].StandardHost[localhost].StandardContext[]]", "threadId": 15, "blockedTime": -1, "blockedCount": 0, "waitedTime": -1, "waitedCount": 3, "lockName": null, "lockOwnerId": -1, "lockOwnerName": null, "inNative": false, "suspended": false, "threadState": "TIMED_WAITING", "stackTrace": [
        {"methodName": "sleep", "fileName": "Thread.java", "lineNumber": -2, "className": "java.lang.Thread", "nativeMethod": true},
        {"methodName": "run", "fileName": "ContainerBase.java", "lineNumber": 1508, "className": "org.apache.catalina.core.ContainerBase$ContainerBackgroundProcessor", "nativeMethod": false},
        {"methodName": "run", "fileName": "Thread.java", "lineNumber": 745, "className": "java.lang.Thread", "nativeMethod": false}
    ], "lockedMonitors": [], "lockedSynchronizers": [], "lockInfo": null},
    {"threadName": "Monitor Ctrl-Break", "threadId": 10, "blockedTime": -1, "blockedCount": 0, "waitedTime": -1, "waitedCount": 0, "lockName": null, "lockOwnerId": -1, "lockOwnerName": null, "inNative": true, "suspended": false, "threadState": "RUNNABLE", "stackTrace": [
        {"methodName": "socketAccept", "fileName": "PlainSocketImpl.java", "lineNumber": -2, "className": "java.net.PlainSocketImpl", "nativeMethod": true},
        {"methodName": "accept", "fileName": "AbstractPlainSocketImpl.java", "lineNumber": 404, "className": "java.net.AbstractPlainSocketImpl", "nativeMethod": false},
        {"methodName": "implAccept", "fileName": "ServerSocket.java", "lineNumber": 545, "className": "java.net.ServerSocket", "nativeMethod": false},
        {"methodName": "accept", "fileName": "ServerSocket.java", "lineNumber": 513, "className": "java.net.ServerSocket", "nativeMethod": false},
        {"methodName": "run", "fileName": "AppMain.java", "lineNumber": 82, "className": "com.intellij.rt.execution.application.AppMain$1", "nativeMethod": false},
        {"methodName": "run", "fileName": "Thread.java", "lineNumber": 745, "className": "java.lang.Thread", "nativeMethod": false}
    ], "lockedMonitors": [], "lockedSynchronizers": [], "lockInfo": null},
    {"threadName": "Signal Dispatcher", "threadId": 4, "blockedTime": -1, "blockedCount": 0, "waitedTime": -1, "waitedCount": 0, "lockName": null, "lockOwnerId": -1, "lockOwnerName": null, "inNative": false, "suspended": false, "threadState": "RUNNABLE", "stackTrace": [], "lockedMonitors": [], "lockedSynchronizers": [], "lockInfo": null},
    {"threadName": "Finalizer", "threadId": 3, "blockedTime": -1, "blockedCount": 950, "waitedTime": -1, "waitedCount": 913, "lockName": "java.lang.ref.ReferenceQueue$Lock@21eaa4cc", "lockOwnerId": -1, "lockOwnerName": null, "inNative": false, "suspended": false, "threadState": "WAITING", "stackTrace": [
        {"methodName": "wait", "fileName": "Object.java", "lineNumber": -2, "className": "java.lang.Object", "nativeMethod": true},
        {"methodName": "remove", "fileName": "ReferenceQueue.java", "lineNumber": 142, "className": "java.lang.ref.ReferenceQueue", "nativeMethod": false},
        {"methodName": "remove", "fileName": "ReferenceQueue.java", "lineNumber": 158, "className": "java.lang.ref.ReferenceQueue", "nativeMethod": false},
        {"methodName": "run", "fileName": "Finalizer.java", "lineNumber": 209, "className": "java.lang.ref.Finalizer$FinalizerThread", "nativeMethod": false}
    ], "lockedMonitors": [], "lockedSynchronizers": [], "lockInfo": {"className": "java.lang.ref.ReferenceQueue$Lock", "identityHashCode": 569025740}},
    {"threadName": "Reference Handler", "threadId": 2, "blockedTime": -1, "blockedCount": 42, "waitedTime": -1, "waitedCount": 21, "lockName": "java.lang.ref.Reference$Lock@3d4ca21f", "lockOwnerId": -1, "lockOwnerName": null, "inNative": false, "suspended": false, "threadState": "WAITING", "stackTrace": [
        {"methodName": "wait", "fileName": "Object.java", "lineNumber": -2, "className": "java.lang.Object", "nativeMethod": true},
        {"methodName": "wait", "fileName": "Object.java", "lineNumber": 502, "className": "java.lang.Object", "nativeMethod": false},
        {"methodName": "run", "fileName": "Reference.java", "lineNumber": 157, "className": "java.lang.ref.Reference$ReferenceHandler", "nativeMethod": false}
    ], "lockedMonitors": [], "lockedSynchronizers": [], "lockInfo": {"className": "java.lang.ref.Reference$Lock", "identityHashCode": 1028432415}}
]