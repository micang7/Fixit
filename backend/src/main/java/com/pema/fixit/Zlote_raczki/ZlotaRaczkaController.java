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


    @PostMapping("/zlota_raczka")
    public void createZlotaRaczka(@RequestBody ZlotaRaczkaInsertDto zlotaRaczka) {
        zlotaRaczkaService.createZlotaRaczka(zlotaRaczka);
    }

}
