import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/service/serie.service';
import { Observable } from 'rxjs';
import { Serie } from 'src/app/model/serie';
import { AuthService } from 'src/app/service/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-viendo',
  templateUrl: './viendo.page.html',
  styleUrls: ['./viendo.page.scss'],
})
export class ViendoPage implements OnInit {

  seguidas: Observable<Serie[]>;

  constructor(
    public serieService: SerieService,
    private authService: AuthService,
    public toastController: ToastController) {
    this.authService.getCurrentUser().subscribe(
      () => this.seguidas = serieService.getSeguidas(),
    );
  }

  ngOnInit() {
  }

  async presentVisToast() {
    const toast = await this.toastController.create({
      header: 'Serie añadida correctamente',
      duration: 2000,
      color: 'success',
      message: "Comprueba tu lista de finalizadas"
    });
    toast.present();
  }

  async presentFavToast() {
    const toast = await this.toastController.create({
      header: 'Serie añadida correctamente',
      duration: 2000,
      color: 'warning',
      message: "Comprueba tu lista de favoritos"
    });
    toast.present();
  }

}
