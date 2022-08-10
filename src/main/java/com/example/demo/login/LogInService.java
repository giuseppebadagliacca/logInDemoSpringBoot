package com.example.demo.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LogInService {

    @Autowired
    private LogInRepo logInRepo;

    public List<LogIn> getAllLogIns() {
        return logInRepo.findAll();
    }

    public Optional<LogIn> findASingleLogIn(Integer id) {
        return logInRepo.findById(id);
    }

    public void addLogIn(LogIn logIn) {
        logInRepo.save(logIn);
    }

    public void deleteLogIn(Integer id) {
        logInRepo.deleteById(id);
    }

    public void updateLogIn(Integer id, LogIn newLogInInfo) {
    List<LogIn> list = logInRepo.findAll();

    for(LogIn singleLogIn:list){
        if(singleLogIn.getId() == id){
            singleLogIn.setEmail(newLogInInfo.getEmail());
            singleLogIn.setPassword(newLogInInfo.getPassword());
            logInRepo.save(singleLogIn);
        }
    }
    }
}
