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
  loginUsuario!:LoginUsuario;
  nombreUsuario!:string;
  password!: string;
  roles:string[]=[];


  form:FormGroup; 
  constructor(private formBuilder:FormBuilder,private tokenService:TokenService, private authService:AuthService, private router:Router){
    this.form=this.formBuilder.group(
      {
        Usuario:['',[Validators.required, Validators.minLength(4)]],
        Password:['',[Validators.required,Validators.minLength(4)]],
      }
    ) 
  }

  get Usuario(){
    return this.form.get('nombreUsuario');
  }

  get Password(){
    return this.form.get('password');
  }
  
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLogginFail=false;
      this.roles=this.tokenService.getAuthorities();
    }
  }

  onLogin(event:Event):void{
    event.preventDefault;
    this.loginUsuario=new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe({
        next:(data:any)=>{
          this.isLogged=true;
          this.isLogginFail=false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.roles=data.authorities;
          this.router.navigate(['/portfolio'])
        },error:(error:HttpErrorResponse)=>{
        this.isLogged=false;
        this.isLogginFail=true;
        console.log(error);
      }
    })
  }


}
