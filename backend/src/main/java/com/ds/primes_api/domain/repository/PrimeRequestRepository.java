package com.ds.primes_api.domain.repository;

import com.ds.primes_api.domain.model.PrimeRequest;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author isai_
 */
public interface PrimeRequestRepository extends JpaRepository<PrimeRequest, Long>{
    
}
