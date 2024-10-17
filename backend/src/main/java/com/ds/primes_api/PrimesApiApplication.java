package com.ds.primes_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;

import java.util.Objects;

@SpringBootApplication
public class PrimesApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(PrimesApiApplication.class, args);
	}

}
