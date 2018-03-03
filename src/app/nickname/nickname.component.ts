import {Component, OnInit} from '@angular/core';
import {SocketService} from "../socket.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nickname',
    templateUrl: './nickname.component.html',
    styleUrls: ['./nickname.component.css']
})
export class NicknameComponent implements OnInit {

    public loginData = { name:'', pass:'' };

    public nombre;

    constructor(public _Socket: SocketService, public http: HttpClient, public router:Router) {
    }

    ngOnInit(){
        let token = localStorage.getItem('jwtToken');
        if (token){
          this.router.navigate(['reglas']);
      }
    }

    public sendName() {
        this._Socket.newUser(this.nombre);
    }

    public login(){
        console.log("SE ha ejecutado el metodo login en el cliente")
        this.http.post('/nickname', this.loginData,{responseType: 'text'}).subscribe( (data)=> {
            let resp= JSON.parse(data);
            console.log("He recibido el tokennnnnnn")
            if (resp.token){
                localStorage.setItem('jwtToken', resp.token);
                this.router.navigate(['reglas']);
            } else {
                console.error("ERROR DE AUTENTIFICACION PRIMO")
            }
        })
    }
}
