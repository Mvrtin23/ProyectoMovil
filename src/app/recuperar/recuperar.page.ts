import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  public nombre: string = "";
  public password: string = "";


  iraNuevaPagina(){
    this.navCtrl.navigateForward('/pagina-2');
  }

  volverAPaginaAnterior(){
    this.navCtrl.navigateBack('/home'); 
  } 

  ngOnInit() {
  }


}
