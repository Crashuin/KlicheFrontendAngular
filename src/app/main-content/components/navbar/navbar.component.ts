import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-content-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent {

  constructor(private router: Router){}

  navegarHome(){
    this.router.navigate(['/home']);
  }

  navegarLogin(){
    this.router.navigate(['/login']);
  }
  
  navegarRegister(){
    this.router.navigate(['/register']);
  }


}
