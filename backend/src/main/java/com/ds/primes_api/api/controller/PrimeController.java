package com.ds.primes_api.api.controller;

import com.ds.primes_api.application.service.PrimeService;
import com.ds.primes_api.domain.model.PrimeRequest;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author isai_
 */
@RestController
@RequestMapping("/api/primes")
public class PrimeController {

    @Autowired
    private PrimeService primeService;

    @PostMapping("/check")
    public PrimeRequest checkPrime(@RequestBody PrimeRequest request) {
        return primeService.checkAndSavePrime(request.getNumber());
    }

    @GetMapping("/records")
    public List<PrimeRequest> getAllRecords() {
        return primeService.findAll();
    }

}
//@ResponseBody