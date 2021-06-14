import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/service/serie.service';
import { Observable } from 'rxjs';
import { Serie } from 'src/app/model/serie';
import { AuthService } from 'src/app/service/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.page.html',
  styleUrls: ['./pendientes.page.scss'],
})
export class PendientesPage implements OnInit {

  pendientes: Observable<Serie[]>;

  constructor(
    public serieService: SerieService,
    private authService: AuthService,
    public toastController: ToastController
  ) {
    this.authService.getCurrentUser().subscribe(
      () => this.pendientes = this.serieService.getPendientes(),
    );
  }

  ngOnInit() {
  }

  async presentSegToast() {
    const toast = await this.toastController.create({
      header: 'Serie añadida correctamente',
      duration: 2000,
      color: 'primary',
      message: "Comprueba tu lista de seguimiento"
    });
    toast.present();
  }

}
