import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  //url:string="http://npinti.ddns.net:9008/api/";

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    console.log("El servicio portfolio esta corriendo")
    return this.http.get<any>('./assets/data/data.json');
    //return this.http.get<any>('this.url+"persona"'); ESTA DEVOLVERIA SOLO LOS DATOS DE PERSONA
    //Aca todavia no llegan los datos del servidor, porque el servidor esta esperando el token en el encabezadp
    //del request, el cual no esta llegando
  }
}
