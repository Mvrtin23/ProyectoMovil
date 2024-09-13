import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private alertController: AlertController)  {}

  public nombre: string = "";
  public password: string = "";


  async validarIngreso() {
    if (this.nombre.trim().length === 0 || this.password.trim().length === 0) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingrese tanto el nombre de usuario como la contraseña.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      this.iraNuevaPagina();
    }
  }

  iraNuevaPagina(){
    this.navCtrl.navigateForward('/pagina-2');

    localStorage.setItem('nombre', this.nombre);

  }
  volverAPaginaAnterior(){
    this.navCtrl.navigateBack('/home');
  }
  establecerNuevaRaiz() {
     this.navCtrl.navigateRoot('/home');
  }
  irARecuperarContrasena() {
    this.navCtrl.navigateForward('/recuperar');
  }
  
    
  
}
  