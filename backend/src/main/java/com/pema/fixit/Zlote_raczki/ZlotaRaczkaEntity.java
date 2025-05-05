package com.pema.fixit.Zlote_raczki;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "zlota_raczka")
public class ZlotaRaczkaEntity {
    @Setter
    @Getter
    @Id
    @Column(name = "id_raczki")
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
    private int idUslugi;
    public ZlotaRaczkaEntity(long id_raczki, String imie, String nazwisko, String telefon, String email, String miasto, int idUslugi) {
        this.id_raczki = id_raczki;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.telefon = telefon;
        this.email = email;
        this.miasto = miasto;
        this.idUslugi=idUslugi;
    }
    public ZlotaRaczka toZlotaRaczka() {
        return new ZlotaRaczka(id_raczki, imie, nazwisko, telefon, email, miasto, idUslugi);
    }
    public ZlotaRaczkaEntity() {}
}
