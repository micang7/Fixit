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
    @Setter
    @Getter
    private String login;
    @Setter
    @Getter
    private String haslo;

    public ZlotaRaczka(long id_raczki, String imie, String nazwisko, String telefon, String email, String miasto, String login, String haslo) {
        this.id_raczki = id_raczki;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.telefon = telefon;
        this.email = email;
        this.miasto = miasto;
        this.login = login;
        this.haslo = haslo;
    }
    public ZlotaRaczka(String imie, String nazwisko, String telefon, String email, String miasto, String login, String haslo) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.telefon = telefon;
        this.email = email;
        this.miasto = miasto;
        this.login = login;
        this.haslo = haslo;
    }

    public static ZlotaRaczka fromZlotaRaczkaInsertDto(ZlotaRaczkaInsertDto zlotaRaczkaInsertDto) {
        return new ZlotaRaczka(zlotaRaczkaInsertDto.getImie(), zlotaRaczkaInsertDto.getNazwisko(), zlotaRaczkaInsertDto.getTelefon(), zlotaRaczkaInsertDto.getEmail(), zlotaRaczkaInsertDto.getMiasto(), zlotaRaczkaInsertDto.getLogin(), zlotaRaczkaInsertDto.getHaslo());
    }
}
