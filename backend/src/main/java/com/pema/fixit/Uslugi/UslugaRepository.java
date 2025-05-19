package com.pema.fixit.Uslugi;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UslugaRepository extends JpaRepository<UslugaEntity, Integer> {

    List<UslugaEntity> findAll();

    List<UslugaEntity> getAllByIdKategorii(int id_kategorii);
}
