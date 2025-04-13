package com.pema.fixit.Kategorie_uslug;

import lombok.Getter;
import lombok.Setter;

public class KategoriaUslugi {
    @Setter
    @Getter
    private long id_kategorii;
    @Setter
    @Getter
    private String nazwa;

    public KategoriaUslugi(long id_kategorii, String nazwa) {
        this.id_kategorii = id_kategorii;
        this.nazwa = nazwa;
    }

}
