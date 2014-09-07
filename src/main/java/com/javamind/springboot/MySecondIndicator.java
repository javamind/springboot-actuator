package com.javamind.springboot;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;

/**
 * My own control
 */
@Component
public class MySecondIndicator implements HealthIndicator {

    @Override
    public Health health() {
        return Health.down(new RuntimeException("Erreur lors de l'execution"))
                .withDetail("test sauvegarde", "KO pb disque")
                .build();
    }
}
