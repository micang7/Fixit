package com.pema.fixit.Zlecenia;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZlecenieService {
    private final ZlecenieStorage zlecenieStorage;
    @Autowired
    public ZlecenieService(ZlecenieStorage zlecenieStorage) {
        this.zlecenieStorage=zlecenieStorage;
    }
    public List<Zlecenie> getZlecenia() {
        return zlecenieStorage.getZlecenia();
    }

    public List<Zlecenie> getZlecenieByStatus(String status) {
        return zlecenieStorage.getZlecenieByStatus(status);
    }

    public List<Zlecenie> getZlecenieByData(String dataWykonania) {
        return zlecenieStorage.getZlecenieByData(dataWykonania);
    }
    public void createZlecenie(ZlecenieInsertDto zlecenie) {
        zlecenieStorage.createZlecenie(Zlecenie.fromZlecenieInsertDto(zlecenie));
    }
}
