package com.pema.fixit.Zlecenia;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZlecenieService {
    public ZlecenieRepository zlecenieRepository;
    @Autowired
    public ZlecenieService(ZlecenieRepository zlecenieRepository) {
        this.zlecenieRepository=zlecenieRepository;
    }
    public List<Zlecenie> getZlecenia() {
        return zlecenieRepository.findAll().stream().map(ZlecenieEntity::toZlecenie).toList();
    }

}
