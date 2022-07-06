import { Component, Input, OnInit } from '@angular/core';
import { faTrashAlt , faPlus,faPen } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/models/educacion';
import { EducationService } from 'src/app/services/education.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {


  faPlus = faPlus;
  faPen=faPen;
  faTrash= faTrashAlt;

  public educacionLista:Educacion[]=[];
  
  constructor(private educationService:EducationService) { }

  ngOnInit(): void {
    this.verEducacion();
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



}


