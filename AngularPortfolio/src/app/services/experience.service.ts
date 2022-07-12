import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public verExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/verExperiencia`)
  }

  public agregarExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/newExperiencia`,experiencia);
  }

  public modificarExperiencia(experiencia:Experiencia): Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiServerUrl}/modificarExperiencia`,experiencia);
  }

  public borrarExperiencia(idExp:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/deleteExperiencia/${idExp}`);
  }
}
