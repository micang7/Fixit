package com.pema.fixit.Zlote_raczki;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ZlotaRaczkaRepository extends JpaRepository<ZlotaRaczkaEntity, Long> {
    List<ZlotaRaczkaEntity> findAll();

    List<ZlotaRaczkaEntity> getAllByIdUslugi(int idUslugi);
}
