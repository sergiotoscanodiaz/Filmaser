import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from 'src/app/model/serie';
import { AuthService } from 'src/app/service/auth.service';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  generos: string[] = [];
  generosAux: string[] = [];

  userId: string;
  series: Serie[];

  constructor(
    private httpClient: HttpClient,
    private db: AngularFirestore,
    private authService: AuthService,
    private alert: AlertController) {
    this.authService.getCurrentUser().subscribe(
      data => this.userId = data.uid
    );

    this.getSeries().subscribe(
      data => {
        data.forEach(f => {
          f.generos.forEach(e => {
            this.generosAux.push(e);
          });
          f.esFav = false;
        });
        this.generosAux.forEach(g => {
          if (!this.generos.includes(g)) {
            this.generos.push(g);
          }
        });
      }
    );
  }

  getGeneros(): string[] {
    return this.generos;
  }

  getSeries(): Observable<any> {
    return this.httpClient.get('assets/data.json');
  }

  getFavoritos(): Observable<Serie[]> {
    return this.db.collection<Serie>('users/' + this.userId + '/favoritas').snapshotChanges()
      .pipe(
        map(
          snaps => snaps.map(
            snap => <Serie>{
              id: snap.payload.doc.id,
              ...snap.payload.doc.data() as Serie
            }
          )
        )
      );
  }

  getPendientes(): Observable<Serie[]> {
    return this.db.collection<Serie>('users/' + this.userId + '/pendientes').snapshotChanges()
      .pipe(
        map(
          snaps => snaps.map(
            snap => <Serie>{
              id: snap.payload.doc.id,
              ...snap.payload.doc.data() as Serie
            }
          )
        )
      );
  }

  getSeguidas(): Observable<Serie[]> {
    return this.db.collection<Serie>('users/' + this.userId + '/viendo').snapshotChanges()
      .pipe(
        map(
          snaps => snaps.map(
            snap => <Serie>{
              id: snap.payload.doc.id,
              ...snap.payload.doc.data() as Serie
            }
          )
        )
      );
  }

  getVistas(): Observable<Serie[]> {
    return this.db.collection<Serie>('users/' + this.userId + '/vistas').snapshotChanges()
      .pipe(
        map(
          snaps => snaps.map(
            snap => <Serie>{
              id: snap.payload.doc.id,
              ...snap.payload.doc.data() as Serie
            }
          )
        )
      );
  }

  addToFavoritos(serie: Serie): Promise<DocumentReference> {
    return this.db.collection<Serie>('users/' + this.userId + '/favoritas').add(serie);
  }

  addToPendientes(serie: Serie): Promise<DocumentReference> {
    return this.db.collection<Serie>('users/' + this.userId + '/pendientes').add(serie);
  }

  addToSeguidas(serie: Serie): Promise<DocumentReference> {
    return this.db.collection<Serie>('users/' + this.userId + '/viendo').add(serie);
  }

  addToVistas(serie: Serie): Promise<DocumentReference> {
    return this.db.collection<Serie>('users/' + this.userId + '/vistas').add(serie);
  }

  public deleteFavoritoById(id: string): Promise<void> {
    console.log("Se ha eliminado la serie con el id: " + id);
    return this.db.collection('users/' + this.userId + '/favoritas').doc(id).delete();
  }

  async alertDeleteFavorita(id: string, nombre: string) {
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
            this.deleteFavoritoById(id);
          }
        }
      ]
    });
    await alert.present();
  }

  public deletePendienteById(id: string): Promise<void> {
    console.log("Se ha eliminado la serie con el id: " + id);
    return this.db.collection('users/' + this.userId + '/pendientes').doc(id).delete();
  }

  async alertDeletePendiente(id: string, nombre: string) {
    const alert = await this.alert.create({
      header: 'Borrar serie',
      message: `¿Estás seguro que quieres borrar la serie <strong> ${nombre}</strong> de tu lista de pendientes?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Aceptar',
          handler: () => {
            this.deletePendienteById(id);
          }
        }
      ]
    });
    await alert.present();
  }

  public deleteSeguidaById(id: string): Promise<void> {
    console.log("Se ha eliminado la serie con el id: " + id);
    return this.db.collection('users/' + this.userId + '/viendo').doc(id).delete();
  }

  async alertDeleteSeguida(id: string, nombre: string) {
    const alert = await this.alert.create({
      header: 'Borrar serie',
      message: `¿Estás seguro que quieres borrar la serie <strong> ${nombre}</strong> de tu lista de seguimiento?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Aceptar',
          handler: () => {
            this.deleteSeguidaById(id);
          }
        }
      ]
    });
    await alert.present();
  }

}
