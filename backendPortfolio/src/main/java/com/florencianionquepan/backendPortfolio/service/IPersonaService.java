
package com.florencianionquepan.backendPortfolio.service;

import com.florencianionquepan.backendPortfolio.model.Persona;
import java.util.List;


public interface IPersonaService {
    
    public void crearPersona(Persona pers);
    public void borrarPersona(Long id);
    public List <Persona> verPersonas();
    public Persona buscarPersona(Long id);
    
}
