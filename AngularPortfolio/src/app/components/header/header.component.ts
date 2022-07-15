import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit }from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/models/persona';
import { HeaderService } from 'src/app/services/header.service';
import { FormsModule }   from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged=false;

  faCameraRetro = faCameraRetro;
  faUserEdit = faUserEdit;
  
  public Persona:any | undefined;
  public modificarPersona:Persona | undefined;
  miPortfolio:any;


  constructor (private headerService:HeaderService, private tokenService: TokenService){}

  ngOnInit(): void {
    this.verPersona();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  public onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
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

  public onOpenModal(mode:String,Persona?:Persona){
    const container=document.querySelector('#main-component');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal'); 
    if(mode=='fotoPortada'){
      this.modificarPersona=Persona;
      button.setAttribute('data-toggle', '#modificarPortada');
    }else if(mode=='perfil'){
      this.modificarPersona=Persona;
      button.setAttribute('data-toggle', '#modificarPerfil');
    }
    container?.appendChild(button);
    button.click;
  }

  public onModificarPersona(Persona:Persona){
    this.modificarPersona=Persona;
    console.log(Persona);
    this.headerService.modificarPersona(Persona).subscribe({
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
