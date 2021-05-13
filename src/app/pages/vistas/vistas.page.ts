import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/service/serie.service';
import { Observable } from 'rxjs';
import { Serie } from 'src/app/model/serie';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { ComentariosPage } from '../comentarios/comentarios.page';
import { ModalController } from '@ionic/angular';
import { NewComentarioPage } from 'src/app/modals/new-comentario/new-comentario.page';

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
    private router: Router,
    private authService: AuthService,
    private modalController: ModalController) {
      this.authService.getCurrentUser().subscribe(
        () => this.vistas = serieService.getVistas(),
        data => this.userId = data.uid
      );
     }

  ngOnInit() {
  }

  async addComentarioModal(){
    const modal = await this.modalController.create({
      component: NewComentarioPage
    });
    return await modal.present();
  } 

}
