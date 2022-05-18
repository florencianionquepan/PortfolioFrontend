import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faTrashAlt , faPlus,faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  faPlus = faPlus;
  faPen=faPen;
  faTrash= faTrashAlt;

  experienciaLista:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.experienciaLista=data.experienciaLaboral;
    })
  }

  sumarExperiencia(experienciaLista:any){
    console.log(experienciaLista);
  }

  editExperiencia(experienciaLista:any){
    console.log(experienciaLista);
  }

  borrarExperiencia(experienciaLista:any){
    console.log(experienciaLista);
  }

}
