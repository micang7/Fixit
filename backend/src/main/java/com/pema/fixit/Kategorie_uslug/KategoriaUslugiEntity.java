package com.pema.fixit.Kategorie_uslug;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "kategoria_uslugi")
public class KategoriaUslugiEntity {
    @Setter
    @Getter
    @Id
    @Column(name = "id_kategorii")
    private long id_kategorii;
    @Setter
    @Getter
    private String nazwa;

    public KategoriaUslugiEntity(long id_kategorii, String nazwa) {
        this.id_kategorii = id_kategorii;
        this.nazwa = nazwa;
    }
    public KategoriaUslugiEntity() {}

    public KategoriaUslugi toKategoriaUslugi() {
        return new KategoriaUslugi(id_kategorii, nazwa);
    }



}
