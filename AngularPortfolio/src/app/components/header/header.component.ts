import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit }from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/models/persona';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faCameraRetro = faCameraRetro;
  faUserEdit = faUserEdit;
  
  public Persona:any | undefined;
  public modificarPersona:Persona | undefined;
  miPortfolio:any;


  constructor (private headerService:HeaderService){}

  ngOnInit(): void {
    this.verPersona();
  }

  public verPersona():void{
    this.headerService.verPersona().subscribe({
      next:(response:any)=>{
        this.Persona=response[0];
        //console.log(this.Persona);
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
      }
    })
  }

  public onOpenModal(mode:String,persona?:Persona){
    const container=document.querySelector('#main-component');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal'); 
    if(mode=='fotoPortada'){
      this.modificarPersona=persona;
      button.setAttribute('data-toggle', '#modificarPortada');
    }else if(mode=='perfil'){
      this.modificarPersona=persona;
      button.setAttribute('data-toggle', '#modificarPerfil');
    }
    container?.appendChild(button);
    button.click;
  }

  public onModificarPersona(persona:Persona){
    this.modificarPersona=persona;
    this.headerService.modificarPersona(persona).subscribe({
      next:(response:Persona)=>{
        console.log(response);
        this.verPersona();
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
      }
    })
  }
}
