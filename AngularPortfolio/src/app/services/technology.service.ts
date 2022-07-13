import { Injectable } from '@angular/core';
import { Tecnologia } from '../models/tecnologia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public verTecnologia():Observable<Tecnologia[]>{
    return this.http.get<Tecnologia[]>(`${this.apiServerUrl}/verTecnologias`)
  }

  public agregarTecnologia(Tecnologia:Tecnologia):Observable<Tecnologia>{
    return this.http.post<Tecnologia>(`${this.apiServerUrl}/newTecnologia`,Tecnologia);
  }

  public modificarTecnologia(Tecnologia:Tecnologia): Observable<Tecnologia>{
    return this.http.put<Tecnologia>(`${this.apiServerUrl}/modificarTecnologia`,Tecnologia);
  }

  public borrarTecnologia(idTec:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/deleteTecnologia/${idTec}`);
  }

}
