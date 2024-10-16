package com.ds.primes_api.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class InfoResponse {
    private String version;
    private String environment;

//    public InfoResponse() {
//        this.version = System.getProperty("app.version");
//        this.environment = System.getProperty("spring.application.environment");
//    }

}
