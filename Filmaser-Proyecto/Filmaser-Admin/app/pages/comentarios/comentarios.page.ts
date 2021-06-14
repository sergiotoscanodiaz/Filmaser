import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from 'src/app/model/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  comentarios: Observable<Comentario[]>;

  constructor(public comentaService: ComentarioService) {
    this.comentarios = this.comentaService.getComentarios();
   }

  ngOnInit() {
  }

}
