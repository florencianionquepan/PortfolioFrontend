
package com.florencianionquepan.backendPortfolio.repository;

import com.florencianionquepan.backendPortfolio.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepository extends JpaRepository <Persona, Long>{
    
}
