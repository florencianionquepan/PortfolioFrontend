import { Component, Input, OnInit } from '@angular/core';
import { faTrashAlt , faPlus,faPen } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/models/educacion';
import { EducationService } from 'src/app/services/education.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  faPlus = faPlus;
  faPen=faPen;
  faTrash= faTrashAlt;

  isLogged=false;

  public educacionLista:Educacion[]=[];
  public modificarEducacion:Educacion | undefined;
  public eliminarEducacion:Educacion | undefined;

  constructor(private educationService:EducationService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.verEducacion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  public verEducacion():void{
    this.educationService.verEducacion().subscribe({
      next:(Response:Educacion[])=>{
        this.educacionLista=Response;
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
      }
      
    })
  }

  public onOpenModal(mode:String, educacion?:Educacion):void{
    const container=document.querySelector('#main-component');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal'); 
    if(mode==='agregar'){
      button.setAttribute('data-toggle', '#agregarEducacionModal');
    }else if(mode==='eliminar'){
      this.eliminarEducacion=educacion;
      button.setAttribute('data-toggle', '#eliminarEducacionModal');
    }else if(mode=='modificar'){
      this.modificarEducacion=educacion;
      button.setAttribute('data-toggle', '#modificarEducacionModal');
    }
    container?.appendChild(button);
    button.click;
  }

  public onAgregarEducacion(addForm:NgForm){
    document.getElementById('agregar-educacion-form')?.click();
    this.educationService.agregarEducacion(addForm.value).subscribe({
      next:(response:Educacion)=>{
        console.log(response);
        this.verEducacion();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
        addForm.reset();
      }
    })
  }

  public onModificarEducacion(educacion:Educacion){
    this.modificarEducacion=educacion;
    this.educationService.modificarEducacion(educacion).subscribe({
      next:(response:Educacion)=>{
        console.log(response);
        this.verEducacion();
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
      }
    })
  }

  public onEliminarEducacion(idEdu:number):void{
    this.educationService.borrarEducacion(idEdu).subscribe({
      next:(response:void)=>{
        console.log(response);
        this.verEducacion();
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
      }
    })
  }
}


