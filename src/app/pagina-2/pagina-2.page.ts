import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-2',
  templateUrl: './pagina-2.page.html',
  styleUrls: ['./pagina-2.page.scss'],
})
export class Pagina2Page implements OnInit {
  nombreNombre: string = '';

  datos: any;

  constructor(private router: Router) {
    this.nombreNombre = localStorage.getItem('nombre') || 'Nombre';
  }

  ngOnInit() {
    const navegacion = this.router.getCurrentNavigation();
    this.datos = navegacion?.extras?.state?.['user'];

    console.log(this.datos);
  }


  volverAPaginaInicio() {
    this.router.navigate(['/home']);
  }
}
