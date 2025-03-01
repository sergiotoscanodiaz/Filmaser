import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  logged: boolean = false;

  constructor(
    public authService: AuthService,
    private alert: AlertController) { }

  ngOnInit() { }

  //Llama al método de logout del servicio
  logout() {
    this.authService.logout().then(
      () => location.reload()
    );
  }

  async alertLogout() {
    const alert = await this.alert.create({
      header: 'Salir de la cuenta',
      message: `¿Estás seguro de que quieres salir?`,
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
