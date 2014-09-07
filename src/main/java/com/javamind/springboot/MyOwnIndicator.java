package com.javamind.springboot;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthAggregator;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;

import java.util.Map;

/**
 * My own control
 */
@Component
public class MyOwnIndicator implements HealthIndicator {

    @Override
    public Health health() {
        return Health.up()
                .withDetail("test de javamind", "Super green")
                .withDetail("test database", "OK call in 10ms")
                .build();
    }
}
