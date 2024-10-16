package com.ds.primes_api.domain.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.*;
/**
 *
 * @author isai_
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PrimeRequest {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int number;
    private boolean isPrime;
    private LocalDateTime requestDate;
}
