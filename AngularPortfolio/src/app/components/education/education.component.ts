import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faTrashAlt , faPlus,faPen } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {


  faPlus = faPlus;
  faPen=faPen;
  faTrash= faTrashAlt;

  educacionLista:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.educacionLista=data.educacion;
    })
  }

  editEducation(educacionLista:any){
    console.log(educacionLista);
  }

}


