package com.pema.fixit.Zlecenia;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZlecenieStorage {

    private ZlecenieRepository zlecenieRepository;
    @Autowired
    public ZlecenieStorage(ZlecenieRepository zlecenieRepository) {
        this.zlecenieRepository=zlecenieRepository;
    }

    public List<Zlecenie> getZlecenia() {
        return zlecenieRepository.findAll().stream().map(ZlecenieEntity::toZlecenie).toList();
    }

    public List<Zlecenie> getZlecenieByStatus(String status) {
        return zlecenieRepository.findAllByStatus(status).stream().map(ZlecenieEntity::toZlecenie).toList();
    }

    public List<Zlecenie> getZlecenieByData(String dataWykonania) {
        return zlecenieRepository.findAllByDataWykonania(dataWykonania).stream().map(ZlecenieEntity::toZlecenie).toList();
    }
    @Transactional
    public void createZlecenie(Zlecenie zlecenie) {
        zlecenieRepository.save(ZlecenieEntity.fromZlecenie(zlecenie));
    }
}
