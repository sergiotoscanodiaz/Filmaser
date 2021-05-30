import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comentario } from '../model/comentario';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  userId: string;

  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
    private alert: AlertController
  ) {
    this.authService.getCurrentUser().subscribe(
      data => this.userId = data.uid
    );
  }

  public addComentario(comentario: Comentario): Promise<DocumentReference> {
    return this.db.collection<Comentario>('/comentarios').add(comentario);
  }

  public getComentarios(): Observable<Comentario[]> {
    return this.db.collection('/comentarios').snapshotChanges()
      .pipe(
        map(
          snaps => snaps.map(
            snap => <Comentario>{
              id: snap.payload.doc.id,
              ...snap.payload.doc.data() as Comentario
            }
          )
        )
      );
  }

  public deleteComentarioById(id: string): Promise<void> {
    return this.db.collection('/comentarios').doc(id).delete();
  }

  async alertDeleteComentario(id: string, nombre: string) {
    const alert = await this.alert.create({
      header: 'Borrar comentario',
      message: `¿Estás seguro que quieres borrar este comentario de la serie <strong> ${nombre}</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Aceptar',
          handler: () => {
            this.deleteComentarioById(id);
          }
        }
      ]
    });
    await alert.present();
  }
  
}
