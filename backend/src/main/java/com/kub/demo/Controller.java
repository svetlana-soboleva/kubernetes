package com.kub.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/v1")
public class Controller {

    @GetMapping()
    public ResponseEntity<String> getString(){
        return ResponseEntity.ok().body("Hello World!");
    }

}
