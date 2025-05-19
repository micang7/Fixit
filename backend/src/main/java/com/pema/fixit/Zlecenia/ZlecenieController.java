package com.pema.fixit.Zlecenia;

import com.pema.fixit.Uslugi.Usluga;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ZlecenieController {
    public ZlecenieService zlecenieService;
    @Autowired
    public ZlecenieController(ZlecenieService zlecenieService) {
        this.zlecenieService = zlecenieService;
    }
    @RequestMapping("/zlecenie")
    @ResponseBody
    public List<Zlecenie> getZlecenia() {
        return zlecenieService.getZlecenia();
    }

    @RequestMapping(value = "/zlecenie", params = {"status"})
    @ResponseBody
    public List<Zlecenie> getZlecenieByStatus(@RequestParam(value = "status") String status) {
        return zlecenieService.getZlecenieByStatus(status);
    }

    @RequestMapping(value = "/zlecenie", params = {"data"})
    @ResponseBody
    public List<Zlecenie> getZlecenieByData(@RequestParam(value = "data") String dataWykonania) {
        return zlecenieService.getZlecenieByData(dataWykonania);
    }

    @PostMapping("/zlecenie")
    public void createZlecenie(ZlecenieInsertDto zlecenie) {
        zlecenieService.createZlecenie(zlecenie);
    }
}
