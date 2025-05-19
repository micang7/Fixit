package com.pema.fixit.Zlote_raczki;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "zlota_raczka")
public class ZlotaRaczkaEntity {
    @Setter
    @Getter
    @Id
    @Column(name = "id_raczki")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    public ZlotaRaczkaEntity(long id_raczki, String imie, String nazwisko, String telefon, String email, String miasto, String login, String haslo) {
        this.id_raczki = id_raczki;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.telefon = telefon;
        this.email = email;
        this.miasto = miasto;
        this.login = login;
        this.haslo = haslo;
    }
    public ZlotaRaczka toZlotaRaczka() {
        return new ZlotaRaczka(id_raczki, imie, nazwisko, telefon, email, miasto, login, haslo);
    }

    public static ZlotaRaczkaEntity fromZlotaRaczka(ZlotaRaczka zlotaRaczka) {
        return new ZlotaRaczkaEntity(zlotaRaczka.getId_raczki(), zlotaRaczka.getImie(), zlotaRaczka.getNazwisko(), zlotaRaczka.getTelefon(), zlotaRaczka.getEmail(), zlotaRaczka.getMiasto(), zlotaRaczka.getLogin(), zlotaRaczka.getHaslo());
    }
    public ZlotaRaczkaEntity() {}
}
