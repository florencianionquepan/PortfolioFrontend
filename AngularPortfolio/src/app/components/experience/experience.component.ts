import { Component, OnInit } from '@angular/core';
import { faTrashAlt , faPlus,faPen } from '@fortawesome/free-solid-svg-icons';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experiencia } from 'src/app/models/experiencia';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  faPlus = faPlus;
  faPen=faPen;
  faTrash= faTrashAlt;

  isLogged=false;

  public experienciaLista:Experiencia[]=[];
  public modificarExperiencia:Experiencia | undefined;
  public eliminarExperiencia:Experiencia | undefined;

  constructor(private experienciaService:ExperienceService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.verExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
  
  
  public verExperiencia():void{
    this.experienciaService.verExperiencia().subscribe({
      next:(Response:Experiencia[])=>{
        this.experienciaLista=Response;
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
      }
      
    })
  }

  public onOpenModal(mode:String, experiencia?:Experiencia):void{
    const container=document.querySelector('#main-component');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal'); 
    if(mode==='agregar'){
      button.setAttribute('data-toggle', '#agregarExperienciaModal');
    }else if(mode==='eliminar'){
      this.eliminarExperiencia=experiencia;
      button.setAttribute('data-toggle', '#eliminarExperienciaModal');
    }else if(mode=='modificar'){
      this.modificarExperiencia=experiencia;
      button.setAttribute('data-toggle', '#modificarExperienciaModal');
    }
    container?.appendChild(button);
    button.click;
  }

  public onAgregarExperiencia(addForm:NgForm){
    document.getElementById('agregar-experiencia-form')?.click();
    this.experienciaService.agregarExperiencia(addForm.value).subscribe({
      next:(response:Experiencia)=>{
        console.log(response);
        this.verExperiencia();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
        addForm.reset();
      }
    })
  }

  public onModificarExperiencia(experiencia:Experiencia){
    this.modificarExperiencia=experiencia;
    this.experienciaService.modificarExperiencia(experiencia).subscribe({
      next:(response:Experiencia)=>{
        //console.log(response);
        this.verExperiencia();
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
      }
    })
  }

  public onEliminarExperiencia(idExp:number):void{
    this.experienciaService.borrarExperiencia(idExp).subscribe({
      next:(response:void)=>{
        //console.log(response);
        this.verExperiencia();
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
      }
    })
  }

}
