package com.pema.fixit.Zlote_raczki;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZlotaRaczkaService {
    private final ZlotaRaczkaStorage zlotaRaczkaStorage;
    @Autowired
    public ZlotaRaczkaService(ZlotaRaczkaStorage zlotaRaczkaStorage) {
        this.zlotaRaczkaStorage= zlotaRaczkaStorage;
    }
    public List<ZlotaRaczka> getZloteRaczki() {
        return zlotaRaczkaStorage.getZloteRaczki();
    }


    public void createZlotaRaczka(ZlotaRaczkaInsertDto zlotaRaczka) {
        zlotaRaczkaStorage.createZlotaRaczka(ZlotaRaczka.fromZlotaRaczkaInsertDto(zlotaRaczka));
    }
}
