package com.pema.fixit.Uslugi;

import lombok.Getter;
import lombok.Setter;

public class Usluga {
    @Setter
    @Getter
    private long id_uslugi;
    @Setter
    @Getter
    private int id_kategorii;
    @Setter
    @Getter
    private String nazwa;

    public Usluga(long id_uslugi, int id_kategorii, String nazwa) {
        this.id_uslugi = id_uslugi;
        this.id_kategorii = id_kategorii;
        this.nazwa = nazwa;
    }
}
