package com.pema.fixit.Zlecenia;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "zlecenie")
public class ZlecenieEntity {
    @Setter
    @Getter
    @Id
    @Column(name = "id_zlecenia")
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
    private String data_wykonania;
    @Setter
    @Getter
    private String opis;
    @Setter
    @Getter
    private int ocena;

    public ZlecenieEntity(long id_zlecenia, int id_raczki, String status, int id_uslugi, String imie_klienta, String nazwisko_klienta, String telefon_klienta, String email_klienta, String adres_wykonania, String data_wykonania,String opis, int ocena) {
        this.id_zlecenia = id_zlecenia;
        this.id_raczki = id_raczki;
        this.status = status;
        this.id_uslugi = id_uslugi;
        this.imie_klienta= imie_klienta;
        this.nazwisko_klienta = nazwisko_klienta;
        this.telefon_klienta = telefon_klienta;
        this.email_klienta = email_klienta;
        this.adres_wykonania = adres_wykonania;
        this.data_wykonania = data_wykonania;
        this.opis = opis;
        this.ocena=ocena;
    }
    public ZlecenieEntity() {}
    public Zlecenie toZlecenie() {
        return new Zlecenie(id_zlecenia, id_raczki, status, id_uslugi, imie_klienta, nazwisko_klienta, telefon_klienta, email_klienta, adres_wykonania, data_wykonania, opis, ocena);
    }



}
