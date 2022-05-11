
package com.florencianionquepan.backendPortfolio.controller;

import com.florencianionquepan.backendPortfolio.model.Educacion;
import com.florencianionquepan.backendPortfolio.model.Persona;
import com.florencianionquepan.backendPortfolio.service.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

     @Autowired
     private IPersonaService persoServ;
     
    @GetMapping
    public String decirHola(){
        return "Hola Mundo";
    }
    
    @PostMapping("new/Persona")
    public void agregarPersona(@RequestBody Persona pers){
        persoServ.crearPersona(pers);
    }
    
    @PostMapping("new/Educacion")
    public void agregarEducacion(@RequestBody Educacion edu){
        //listaEducacion.add(edu);
    }
    
    @GetMapping("/ver/Educacion")
    @ResponseBody
    public List<Educacion> verEducacion (){
        //return listaEducacion;
    }
    
}
