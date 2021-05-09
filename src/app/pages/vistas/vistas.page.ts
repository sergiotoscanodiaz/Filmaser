import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/service/serie.service';
import { Observable } from 'rxjs';
import { Serie } from 'src/app/model/serie';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.page.html',
  styleUrls: ['./vistas.page.scss'],
})
export class VistasPage implements OnInit {

  vistas: Observable<Serie[]>;

  userId: string;
  

  constructor( 
    public serieService: SerieService,
    private db: AngularFirestore,
    private authService: AuthService) {
      this.authService.getCurrentUser().subscribe(
        () => this.vistas = serieService.getVistas(),
        data => this.userId = data.uid
      );
     }

  ngOnInit() {
  }

  getComentarios(): Observable<Serie[]> {
    return this.db.collection<Serie>('users/' + this.userId + '/comentarios').snapshotChanges()
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

  addComentarios(comentario: Serie){
    return this.db.collection<Serie>('users/' + this.userId + '/comentarios').add(comentario);
  }

}
