package com.ds.primes_api.application.service;

import com.ds.primes_api.domain.model.PrimeRequest;
import java.util.List;

/**
 *
 * @author isai_
 */
public interface IPrimeService {
    
    PrimeRequest checkAndSavePrime(int number);
    List<PrimeRequest> findAll();

}
