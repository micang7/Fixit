package com.pema.fixit.Zlecenia;

import lombok.Getter;
import lombok.Setter;

public class Zlecenie {
    @Setter
    @Getter
    private long id_zlecenia;
    @Setter
    @Getter
    private int id_raczki;
    @Setter
    @Getter
    private int id_status;
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
    private String data_wykonania;
    @Setter
    @Getter
    private String opis;

    public Zlecenie(long id_zlecenia, int id_raczki, int id_status, int id_uslugi, String imie_klienta, String nazwisko_klienta, String telefon_klienta, String email_klienta, String adres_wykonania, String data_wykonania,String opis) {
        this.id_zlecenia = id_zlecenia;
        this.id_raczki = id_raczki;
        this.id_status = id_status;
        this.id_uslugi = id_uslugi;
        this.imie_klienta= imie_klienta;
        this.nazwisko_klienta = nazwisko_klienta;
        this.telefon_klienta = telefon_klienta;
        this.email_klienta = email_klienta;
        this.adres_wykonania = adres_wykonania;
        this.data_wykonania = data_wykonania;
        this.opis = opis;
    }
}
