package com.pema.fixit.Zlecenia;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
}
