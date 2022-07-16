import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  isLogged=false;
  isLogginFail=false;
  roles:string[]=[];

  loginForm:FormGroup;


  constructor(private formBuilder:FormBuilder, private tokenService:TokenService, private authService:AuthService, private router:Router){
    this.loginForm=this.formBuilder.group(
      {
        nombreUsuario:['',[Validators.required, Validators.minLength(4)]],
        password:['',[Validators.required,Validators.minLength(8)]],
      }
    ) 
  }
  
  get Usuario(){
    return this.loginForm.get('nombreUsuario');
  }

  get Password(){
    return this.loginForm.get('password');
  }


  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLogginFail=false;
      this.roles=this.tokenService.getAuthorities();
    }
  }

  onLogin(event:any):void{
    event.preventDefault;
    this.authService.login(this.loginForm.value).subscribe({
        next:(data:any)=>{
          this.isLogged=true;
          this.isLogginFail=false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles=data.authorities;
          //console.log(this.roles);
          this.router.navigate(['/portfolio'])
        },error:(error:HttpErrorResponse)=>{
        this.isLogged=false;
        this.isLogginFail=true;
        console.log(error);
      }
    })
  }


}
