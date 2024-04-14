package com.CTornero.FitFusionHub.CORS;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**") // Aplica la configuración CORS a todas las rutas
                .allowedOrigins("http://localhost:5173", "http://localhost:4200") // Permite solicitudes desde http://localhost:4200
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Métodos permitidos
                .allowedHeaders("*"); // Headers permitidos
    }
}