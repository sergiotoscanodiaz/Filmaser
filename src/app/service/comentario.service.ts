import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comentario } from '../model/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private db: AngularFirestore) { }

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

  public updateComentarioById(id: string, comentario: Comentario): Promise<void> {
    return this.db.collection('/comentarios').doc(id).set(comentario);
  }
  public getComentarioById(id: string): Observable<Comentario> {
    return this.db.collection('/comentarios').doc<Comentario>(id).valueChanges();
  }

}
