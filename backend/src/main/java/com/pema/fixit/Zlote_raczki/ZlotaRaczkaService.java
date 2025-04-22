package com.pema.fixit.Zlote_raczki;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZlotaRaczkaService {
    private final ZlotaRaczkaRepository zlotaRaczkaRepository;
    @Autowired
    public ZlotaRaczkaService(ZlotaRaczkaRepository zlotaRaczkaRepository) {
        this.zlotaRaczkaRepository = zlotaRaczkaRepository;
    }
    public List<ZlotaRaczka> getZloteRaczki() {
        return zlotaRaczkaRepository.findAll().stream().map(ZlotaRaczkaEntity::toZlotaRaczka).toList();
    }

    public List<ZlotaRaczka> getZlotaRaczkaByIdUslugi(int idUslugi) {
        return zlotaRaczkaRepository.getAllByIdUslugi(idUslugi).stream().map(ZlotaRaczkaEntity::toZlotaRaczka).toList();
    }
}
