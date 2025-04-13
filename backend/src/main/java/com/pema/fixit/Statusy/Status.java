package com.pema.fixit.Statusy;

import lombok.Getter;
import lombok.Setter;

public class Status {
    @Setter
    @Getter
    private long id_status;
    @Setter
    @Getter
    private String status;

    public  Status(long id_status, String status) {
        this.id_status = id_status;
        this.status = status;
    }
}
