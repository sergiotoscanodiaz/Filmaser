import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/model/comentario';
import { ComentarioService } from 'src/app/service/comentario.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-comentario',
  templateUrl: './new-comentario.page.html',
  styleUrls: ['./new-comentario.page.scss'],
})
export class NewComentarioPage implements OnInit {

  comentario: Comentario = { serie: '', comentario: '', nota: 1, apodo: 'Anónimo' };
  tituloPagina: string = 'Nuevo comentario';
  action: string = 'create';
  id: string;

  constructor(
    private modalController: ModalController,
    private comentaService: ComentarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null) { 
      this.tituloPagina = 'Editar comentario';
      this.action = 'edit';
      this.comentaService.getComentarioById(this.id).subscribe(
        data => this.comentario = data
      );
    }
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  addComentario() {
    if (this.action === 'create') {
      this.comentaService.addComentario(this.comentario);
    } else {
      this.comentaService.updateComentarioById(this.id, this.comentario);
    }
    this.closeModal();
  }

}
