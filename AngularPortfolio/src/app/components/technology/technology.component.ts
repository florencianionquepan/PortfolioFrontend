import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faPlus }from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  faPlus = faPlus;
  tecnologiaLista:any;
  constructor(private datosPortfolio:PortfolioService ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.tecnologiaLista=data.tecnologia;
    });
  }

  nueva(){
    
  }
}
