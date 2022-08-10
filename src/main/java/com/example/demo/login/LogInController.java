package com.example.demo.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class LogInController {

    @Autowired
    private LogInService logInService;

//    C READ U D - READ OPERATIONS
    @GetMapping("/login")
    public List<LogIn> getAllLogIns(){
        return logInService.getAllLogIns();
    }

    @GetMapping("/login/{id}")
    public Optional<LogIn> findASingleLogIn(@PathVariable Integer id){
        return logInService.findASingleLogIn(id);
    }

    //    CREATE R U D - CREATE OPERATIONS

    @PostMapping("/login")

    public void addLogIn(@RequestBody LogIn logIn){
        logInService.addLogIn(logIn);
    }

    //    C R U DELETE - DELETE OPERATIONS
    @DeleteMapping("/login/{id}")
    public void deleteLogIn(@PathVariable Integer id){
         logInService.deleteLogIn(id);
    }

    @PutMapping("/login/{id}")
    public void updateLogIn(@PathVariable Integer id, @RequestBody LogIn logIn){
        logInService.updateLogIn(id,logIn);
    }

}
