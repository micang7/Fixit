package com.pema.fixit.Kategorie_uslug;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KategoriaUslugiController {

    private KategoriaUslugiService kategoriaUslugiService;
    @Autowired
    public KategoriaUslugiController(KategoriaUslugiService kategoriaUslugiService) {
        this.kategoriaUslugiService = kategoriaUslugiService;
    }
    @RequestMapping("/kategoria_uslugi")
    @ResponseBody
    public List<KategoriaUslugi> getKategorieUslug() {
        return kategoriaUslugiService.getKategorieUslug();
    }
}
