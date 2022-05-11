
package com.florencianionquepan.backendPortfolio.model;

import java.sql.Date;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ExpLaboral {
    private Long id;
    private String nombreEmpresa;
    private String posicion;
    private Boolean esTrabajoActual;
    private Date fechaInicio;
    private Date fechaFin;
    private String descripcion;
    private String urlFoto;
    private Long idPersona;
    
    public ExpLaboral(Long id, String nombreEmpresa, String posicion, Boolean esTrabajoActual, Date fechaInicio, Date fechaFin, String descripcion, String urlFoto, Long idPersona) {
        this.id = id;
        this.nombreEmpresa = nombreEmpresa;
        this.posicion = posicion;
        this.esTrabajoActual = esTrabajoActual;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.descripcion = descripcion;
        this.urlFoto = urlFoto;
        this.idPersona=idPersona;
    }
    
    public ExpLaboral(){
        
    }
    
    
}
