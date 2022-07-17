import { Component, OnInit } from '@angular/core';
import { faTrashAlt , faPlus,faPen } from '@fortawesome/free-solid-svg-icons';
import { Tecnologia } from 'src/app/models/tecnologia';
import { TechnologyService } from 'src/app/services/technology.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  faPlus = faPlus;
  faPen = faPen;
  faTrashAlt= faTrashAlt;

  isLogged=false;

  public tecnologiaLista:Tecnologia[]=[];
  public modificarTecnologia:Tecnologia | undefined;
  public eliminarTecnologia:Tecnologia | undefined;

  constructor(private technologyService: TechnologyService,private tokenService:TokenService ) { }

  ngOnInit(): void {
    this.verTecnologia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  public verTecnologia():void{
    this.technologyService.verTecnologia().subscribe({
      next:(Response:Tecnologia[])=>{
        this.tecnologiaLista=Response;
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
      }
      
    })
  }

  public onOpenModal(mode:String, tecnologia?:Tecnologia):void{
    const container=document.querySelector('#main-component');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal'); 
    if(mode==='agregar'){
      button.setAttribute('data-toggle', '#agregarTecnologiaModal');
    }else if(mode==='eliminar'){
      this.eliminarTecnologia=tecnologia;
      button.setAttribute('data-toggle', '#eliminarTecnologiaModal');
    }else if(mode=='modificar'){
      this.modificarTecnologia=tecnologia;
      button.setAttribute('data-toggle', '#modificarTecnologiaModal');
    }
    container?.appendChild(button);
    button.click;
  }

  public onAgregarTecnologia(addForm:NgForm){
    document.getElementById('agregar-tecnologia-form')?.click();
    this.technologyService.agregarTecnologia(addForm.value).subscribe({
      next:(response:Tecnologia)=>{
        //console.log(response);
        this.verTecnologia();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
        addForm.reset();
      }
    })
  }

  public onModificarTecnologia(tecnologia:Tecnologia){
    this.modificarTecnologia=tecnologia;
    this.technologyService.modificarTecnologia(tecnologia).subscribe({
      next:(response:Tecnologia)=>{
        //console.log(response);
        this.verTecnologia();
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
      }
    })
  }

  public onEliminarTecnologia(idTec:number):void{
    this.technologyService.borrarTecnologia(idTec).subscribe({
      next:(response:void)=>{
        //console.log(response);
        this.verTecnologia();
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
      }
    })
  }

}
