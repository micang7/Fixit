package com.pema.fixit.Zlote_raczki;

import lombok.Getter;
import lombok.Setter;

public class ZlotaRaczka {
    @Setter
    @Getter
    private long id_raczki;
    @Setter
    @Getter
    private String imie;
    @Setter
    @Getter
    private String nazwisko;
    @Setter
    @Getter
    private String telefon;
    @Setter
    @Getter
    private String email;
    @Setter
    @Getter
    private String miasto;

    public ZlotaRaczka(long id_raczki, String imie, String nazwisko, String telefon, String email, String miasto) {
        this.id_raczki = id_raczki;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.telefon = telefon;
        this.email = email;
        this.miasto = miasto;
    }
}
