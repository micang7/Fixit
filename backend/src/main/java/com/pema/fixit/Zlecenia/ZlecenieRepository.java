package com.pema.fixit.Zlecenia;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ZlecenieRepository extends JpaRepository<ZlecenieEntity,Long > {
    List<ZlecenieEntity> findAll();
}
