package com.cdac.placement.repository;

import com.cdac.placement.model.Batch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BatchRepository extends JpaRepository<Batch, Long> {

    boolean existsByName(String name);
    Batch findByName(String name);
}
