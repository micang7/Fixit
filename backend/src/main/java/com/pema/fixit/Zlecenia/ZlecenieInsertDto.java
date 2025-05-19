package com.pema.fixit.Zlecenia;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

public class ZlecenieInsertDto {
    @Setter
    @Getter
    private long id_zlecenia;
    @Setter
    @Getter
    private int id_raczki;
    @Setter
    @Getter
    private String status;
    @Setter
    @Getter
    private int id_uslugi;
    @Setter
    @Getter
    private String imie_klienta;
    @Setter
    @Getter
    private String nazwisko_klienta;
    @Setter
    @Getter
    private String telefon_klienta;
    @Setter
    @Getter
    private String email_klienta;
    @Setter
    @Getter
    private String adres_wykonania;
    @Setter
    @Getter
    private String dataWykonania;
    @Setter
    @Getter
    private String opis;
    @Setter
    @Getter
    private int ocena;
}
