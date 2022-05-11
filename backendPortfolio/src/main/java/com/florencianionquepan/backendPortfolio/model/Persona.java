
package com.florencianionquepan.backendPortfolio.model;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private String nombre;
    private String apellido;
    private Date fechaNac;
    private String nacionalidad;
    private String ubicacion;
    private String telefono;
    private String mail;
    private String posicion;
    private String sobreMi;
    private String urlFoto;
  

    public Persona(Long id, String nombre, String apellido, Date fechaNac, String nacionalidad, String ubicacion, String telefono, String mail, String posicion, String sobreMi, String urlFoto) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNac = fechaNac;
        this.nacionalidad = nacionalidad;
        this.ubicacion = ubicacion;
        this.telefono = telefono;
        this.mail = mail;
        this.posicion = posicion;
        this.sobreMi = sobreMi;
        this.urlFoto = urlFoto;
    }
 
    public Persona(){
        
    }
    
    
}
