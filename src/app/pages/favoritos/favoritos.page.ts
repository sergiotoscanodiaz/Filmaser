import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/service/serie.service';
import { Observable } from 'rxjs'
import { Serie } from 'src/app/model/serie';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favoritos: Observable<Serie[]>;
  /*favoritos: Serie[] = [];
   clicked: boolean;
  index: number;
  userId: string;
  series: Serie[]; */

  constructor(
    private serieService: SerieService,
    /* 
    private alert: AlertController,
    private db: AngularFirestore, 
    */
    private authService: AuthService) {
    this.authService.getCurrentUser().subscribe(
      () => this.favoritos = serieService.getFavoritos(),
    );
  }

  ngOnInit() { }

  /* public deleteSerieById(id: string): Promise<void> {
    console.log("Se ha eliminado la serie con el id: " + id);
    return this.db.collection('users/' + this.userId + '/series').doc(id).delete();
  }

  async alertDeleteFavorito(id: string, nombre: string) {
    const alert = await this.alert.create({
      header: 'Borrar serie',
      message: `¿Estás seguro que quieres borrar la serie <strong> ${nombre}</strong> de tu lista de favoritos?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Aceptar',
          handler: () => {
            this.deleteSerieById(id);
          }
        }
      ]
    });
    await alert.present();
  }
 */

}
