import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Educacion} from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public verEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/verEducacion`)
  }

  public agregarEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/newEducacion`,educacion);
  }

  public modificarEducacion(educacion:Educacion): Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/modificarEducacion`,educacion);
  }

  public borrarEducacion(idEdu:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/deleteEducacion/${idEdu}`);
  }
}
