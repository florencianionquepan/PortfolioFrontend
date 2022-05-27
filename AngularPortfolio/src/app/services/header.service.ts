import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public verPersona():Observable<Persona>{
     return this.http.get<Persona>(`${this.apiServerUrl}/verPersonas`);
  }

  public agregarPersona(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(`${this.apiServerUrl}/newPersona`,persona);
  }

  public modificarPersona(persona: Persona): Observable<Persona>{
    return this.http.put<Persona>(`${this.apiServerUrl}/modificarPersona`,persona);
  }

}
