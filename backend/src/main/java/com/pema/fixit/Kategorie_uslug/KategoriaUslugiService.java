package com.pema.fixit.Kategorie_uslug;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KategoriaUslugiService {
    private KategoriaUslugiRepository kategoriaUslugiRepository;
    @Autowired
    public KategoriaUslugiService(KategoriaUslugiRepository kategoriaUslugiRepository) {
        this.kategoriaUslugiRepository=kategoriaUslugiRepository;
    }

    public List<KategoriaUslugi> getKategorieUslug() {
        return kategoriaUslugiRepository.findAll().stream().map(KategoriaUslugiEntity::toKategoriaUslugi).toList();
    }
}
