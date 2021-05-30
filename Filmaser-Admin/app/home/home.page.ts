import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  logged: boolean = false;

  constructor(
    public authService: AuthService,
    private alert: AlertController) { }

  logout() {
    this.authService.logout().then(
      () => location.reload()
    );
  }

  async alertLogout() {
    const alert = await this.alert.create({
      header: 'Salir de Filmaser-Admin',
      message: `¿Estás seguro de que quieres salir de Administración?`,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Salir',
          cssClass: 'danger',
          handler: () => {
            this.logout();
          }
        }
      ]
    });
    await alert.present();
  }

}
