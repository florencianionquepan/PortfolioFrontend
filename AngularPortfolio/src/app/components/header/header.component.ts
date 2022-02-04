import { Component, OnInit } from '@angular/core';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit }from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faCameraRetro = faCameraRetro;
  faUserEdit = faUserEdit;
  
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    });
  }

}
