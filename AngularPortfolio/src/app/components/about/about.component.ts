import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faUserEdit }from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/models/persona';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent{
  faUserEdit = faUserEdit;

  public Persona:any | undefined;
  public editPersona:Persona | undefined;

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

}
