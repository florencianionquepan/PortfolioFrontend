
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
public class Educacion {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    
    private String nombreUniversidad;
    private String ubicacion;
    private String titulo;
    private Boolean finalizado;
    private Date fechaInicio;
    private Date fechaFin;
    private String urlFoto;
    private Long idPersona;
    private Long idTipoEducacion;

    public Educacion(Long id, String nombreUniversidad, String ubicacion, String titulo, Boolean finalizado, Date fechaInicio, Date fechaFin, String urlFoto, Long idPersona, Long idTipoEducacion) {
        this.id = id;
        this.nombreUniversidad = nombreUniversidad;
        this.ubicacion = ubicacion;
        this.titulo = titulo;
        this.finalizado = finalizado;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.urlFoto = urlFoto;
        this.idPersona = idPersona;
        this.idTipoEducacion = idTipoEducacion;
    }

    public Educacion() {
    }
 
    
    
    
}
