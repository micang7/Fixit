package com.pema.fixit.Uslugi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UslugaService {
    private final UslugaRepository uslugaRepository;
    @Autowired
    public UslugaService(UslugaRepository uslugaRepository) {
        this.uslugaRepository= uslugaRepository;
    }

    public List<Usluga> getUslugi() {
        return uslugaRepository.findAll().stream().map(UslugaEntity::toUsluga).toList();
    }

        public List<Usluga> getUslugaByIdKategorii(int id_kategorii) {
        return uslugaRepository.getAllByIdKategorii(id_kategorii).stream().map(UslugaEntity::toUsluga).toList();
    }
}
