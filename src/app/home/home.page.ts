import { Component } from '@angular/core';
import { SerieService } from '../service/serie.service';
import { Serie } from '../model/serie';
import { ModalController } from '@ionic/angular';
import { ListsPage } from '../modals/lists/lists.page';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  series: Serie[];
  generos: string[];
  buscarGenero: string;
  clicked: boolean;
  index: number;

  constructor(
    public service: SerieService,
    private modalController: ModalController,
    public toastController: ToastController) {
      this.generos = this.service.getGeneros();
      this.getData();
      this.buscarGenero = "todos";
      this.clicked = false;
      this.index = 0;
  }

  // Abre el modal de las listas
  async openListsModal() {
    const modal = await this.modalController.create({
      component: ListsPage
    });
    return await modal.present();
  }

  getData() {
    this.service.getSeries().subscribe(
      data => {
        this.series = data;
      }
    );
  }

  showDetails(id: number) {
    let aux = this.series.findIndex(s => s.id == id);
    this.clicked = !this.clicked;
    if (aux != this.index) {
      this.index = this.series.findIndex(s => s.id == id);
      this.clicked = !this.clicked;
    }
  }

  async presentPenToast() {
    const toast = await this.toastController.create({
      header: 'Serie añadida correctamente',
      duration: 2000,
      color: 'medium',
      message: "Comprueba tu lista de pendientes"
    });
    toast.present();
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
