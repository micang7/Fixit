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

    public Zlecenie(long id_zlecenia, int id_raczki, String status, int id_uslugi, String imie_klienta, String nazwisko_klienta, String telefon_klienta, String email_klienta, String adres_wykonania, String dataWykonania,String opis, int ocena) {
        this.id_zlecenia = id_zlecenia;
        this.id_raczki = id_raczki;
        this.status = status;
        this.id_uslugi = id_uslugi;
        this.imie_klienta= imie_klienta;
        this.nazwisko_klienta = nazwisko_klienta;
        this.telefon_klienta = telefon_klienta;
        this.email_klienta = email_klienta;
        this.adres_wykonania = adres_wykonania;
        this.dataWykonania = dataWykonania;
        this.opis = opis;
        this.ocena = ocena;
    }
    public Zlecenie(int id_raczki, String status, int id_uslugi, String imie_klienta, String nazwisko_klienta, String telefon_klienta, String email_klienta, String adres_wykonania, String dataWykonania,String opis, int ocena) {
        this.id_raczki = id_raczki;
        this.status = status;
        this.id_uslugi = id_uslugi;
        this.imie_klienta= imie_klienta;
        this.nazwisko_klienta = nazwisko_klienta;
        this.telefon_klienta = telefon_klienta;
        this.email_klienta = email_klienta;
        this.adres_wykonania = adres_wykonania;
        this.dataWykonania = dataWykonania;
        this.opis = opis;
        this.ocena = ocena;
    }

    public static Zlecenie fromZlecenieInsertDto(ZlecenieInsertDto zlecenieInsertDto) {
        return new Zlecenie(zlecenieInsertDto.getId_raczki(), zlecenieInsertDto.getStatus(), zlecenieInsertDto.getId_uslugi(), zlecenieInsertDto.getImie_klienta(), zlecenieInsertDto.getNazwisko_klienta(), zlecenieInsertDto.getTelefon_klienta(), zlecenieInsertDto.getEmail_klienta(), zlecenieInsertDto.getAdres_wykonania(), zlecenieInsertDto.getDataWykonania(), zlecenieInsertDto.getOpis(), zlecenieInsertDto.getOcena());
    }
}
