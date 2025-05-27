package com.pema.fixit.Zlote_raczki;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ZlotaRaczkaStorage {
    private final ZlotaRaczkaRepository zlotaRaczkaRepository;
    @Autowired
    public ZlotaRaczkaStorage(ZlotaRaczkaRepository zlotaRaczkaRepository) {
        this.zlotaRaczkaRepository=zlotaRaczkaRepository;
    }
    public List<ZlotaRaczka> getZloteRaczki() {
        return zlotaRaczkaRepository.findAll().stream().map(ZlotaRaczkaEntity::toZlotaRaczka).toList();
    }
    @Transactional
    public void createZlotaRaczka(ZlotaRaczka zlotaRaczka) {
        zlotaRaczkaRepository.save(ZlotaRaczkaEntity.fromZlotaRaczka(zlotaRaczka));
    }

}
