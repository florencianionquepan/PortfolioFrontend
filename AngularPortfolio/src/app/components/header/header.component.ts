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
  public editPersona:Persona | undefined;
  miPortfolio:any;
/*   constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    });
  } */

  constructor (private headerService:HeaderService){}

  ngOnInit(): void {
    this.verPersona();
  }

  public verPersona():void{
    this.headerService.verPersona().subscribe({
      next:(response:any)=>{
        this.Persona=response[0];
        console.log(this.Persona);
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error.message);
      }
    })
  }

}
