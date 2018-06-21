import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// HTTP Requests
import { Http, Headers } from '@angular/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(  private http: Http,
    private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('perdida por tuberia');
    localStorage.removeItem('perdida por accesorios');
    localStorage.removeItem('Tramos de tuberia');
    localStorage.removeItem('Accesorios Utilizados');
    localStorage.removeItem('velocidad');
    localStorage.removeItem('eficiencia');
    localStorage.removeItem('caudal');
    localStorage.removeItem('presion');
    localStorage.removeItem('altura');
  }

  basica(){
    this.router.navigate(['/basica'])
  }
  avanzada(){
    this.router.navigate(['/caudal'])
  }
}
