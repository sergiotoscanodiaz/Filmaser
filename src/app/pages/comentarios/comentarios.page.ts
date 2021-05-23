import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from 'src/app/model/comentario';
import { ComentarioService } from 'src/app/service/comentario.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  comentarios: Observable<Comentario[]>;

  constructor(private comentaService: ComentarioService) {
    this.comentarios = this.comentaService.getComentarios();
   }

  ngOnInit() {
  }

}
