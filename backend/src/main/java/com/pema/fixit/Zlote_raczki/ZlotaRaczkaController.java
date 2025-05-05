package com.pema.fixit.Zlote_raczki;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class ZlotaRaczkaController {
    private final ZlotaRaczkaService zlotaRaczkaService;
    @Autowired
    public ZlotaRaczkaController(ZlotaRaczkaService zlotaRaczkaService) {
        this.zlotaRaczkaService = zlotaRaczkaService;
    }

    @RequestMapping("/zlota_raczka")
    @ResponseBody
    public List<ZlotaRaczka> getZloteRaczki() {
        return zlotaRaczkaService.getZloteRaczki();
    }

    @RequestMapping(value = "/zlota_raczka", params = {"usluga"})
    @ResponseBody
    public List<ZlotaRaczka> getZlotaRaczkaByIdUslugi(@RequestParam(value = "usluga") int idUslugi) {
        return zlotaRaczkaService.getZlotaRaczkaByIdUslugi(idUslugi);
    }

}
