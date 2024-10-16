package com.ds.primes_api.application.service;

import com.ds.primes_api.domain.model.PrimeRequest;
import com.ds.primes_api.domain.repository.PrimeRequestRepository;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author isai_
 */
@Service
public class PrimeService implements IPrimeService {

    @Autowired
    private PrimeRequestRepository primeRequestRepository;

    public boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    @Override
    public PrimeRequest checkAndSavePrime(int number) {
        boolean isPrime = isPrime(number);
        PrimeRequest primeRequest = new PrimeRequest(null, number, isPrime, LocalDateTime.now());
        return primeRequestRepository.save(primeRequest);
    }

    @Override
    public List<PrimeRequest> findAll() {
        return primeRequestRepository.findAll();
    }

}
