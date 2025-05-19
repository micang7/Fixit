package com.pema.fixit.Zlecenia;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "zlecenie")
public class ZlecenieEntity {
    @Setter
    @Getter
    @Id
    @Column(name = "id_zlecenia")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    public ZlecenieEntity(long id_zlecenia, int id_raczki, String status, int id_uslugi, String imie_klienta, String nazwisko_klienta, String telefon_klienta, String email_klienta, String adres_wykonania, String dataWykonania,String opis, int ocena) {
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
        this.ocena=ocena;
    }
    public ZlecenieEntity() {}
    public Zlecenie toZlecenie() {
        return new Zlecenie(id_zlecenia, id_raczki, status, id_uslugi, imie_klienta, nazwisko_klienta, telefon_klienta, email_klienta, adres_wykonania, dataWykonania, opis, ocena);
    }

    public static ZlecenieEntity fromZlecenie(Zlecenie zlecenie) {
        return new ZlecenieEntity(zlecenie.getId_zlecenia(), zlecenie.getId_raczki(), zlecenie.getStatus(), zlecenie.getId_uslugi(), zlecenie.getImie_klienta(), zlecenie.getNazwisko_klienta(), zlecenie.getTelefon_klienta(), zlecenie.getEmail_klienta(), zlecenie.getAdres_wykonania(), zlecenie.getDataWykonania(), zlecenie.getOpis(),zlecenie.getOcena());
    }


}
