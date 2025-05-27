package com.pema.fixit.Uslugi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UslugaController {
    private UslugaService uslugaService;
    @Autowired
    public UslugaController(UslugaService uslugaService) {
        this.uslugaService = uslugaService;
    }
    @RequestMapping("/usluga")
    @ResponseBody
    public List<Usluga> getUslugi() {
        return uslugaService.getUslugi();
    }

    @RequestMapping(value = "/usluga", params = {"kategoriauslugi"})
    @ResponseBody
    public List<Usluga> getUslugaByIdKategorii(@RequestParam(value = "kategoriauslugi") int id_kategorii) {
        return uslugaService.getUslugaByIdKategorii(id_kategorii);
    }

}
