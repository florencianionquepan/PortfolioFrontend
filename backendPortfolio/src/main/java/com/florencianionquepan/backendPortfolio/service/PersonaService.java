
package com.florencianionquepan.backendPortfolio.service;

import com.florencianionquepan.backendPortfolio.model.Persona;
import com.florencianionquepan.backendPortfolio.repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;


public class PersonaService implements IPersonaService {
    
    @Autowired
    public PersonaRepository persoRepo;
    
    @Override
    public void crearPersona(Persona pers) {
       persoRepo.save(pers);
    }

    @Override
    public void borrarPersona(Long id) {
        persoRepo.deleteById(id);
    }

    @Override
    public List<Persona> verPersonas() {
        return persoRepo.findAll();
    }

    @Override
    public Persona buscarPersona(Long id) {
       return persoRepo.findById(id).orElse(null);
    }
    
}
