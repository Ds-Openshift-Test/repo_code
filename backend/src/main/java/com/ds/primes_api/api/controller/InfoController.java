package com.ds.primes_api.api.controller;

import com.ds.primes_api.domain.model.InfoResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InfoController {

    @Value("${app.version}")
    private String version;

    @Value("${app.environment}")
    private String environment;

    @GetMapping("/api/info")
    public InfoResponse getInfo() {
        return new InfoResponse(version, environment);
    }

}