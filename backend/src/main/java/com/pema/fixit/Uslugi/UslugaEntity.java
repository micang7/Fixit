package com.pema.fixit.Uslugi;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "usluga")
public class UslugaEntity {
    @Setter
    @Getter
    @Id
    @Column(name = "id_uslugi")
    private long id_uslugi;
    @Setter
    @Getter
    private int idKategorii;
    @Setter
    @Getter
    private String nazwa;

    public UslugaEntity(long id_uslugi, int idKategorii, String nazwa) {
        this.id_uslugi =id_uslugi;
        this.idKategorii = idKategorii;
        this.nazwa = nazwa;
    }

    public UslugaEntity() {

    }

    public Usluga toUsluga() {
        return new Usluga(id_uslugi, idKategorii, nazwa);
    }
}
