import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comentario } from 'src/app/model/comentario';
import { AuthService } from 'src/app/service/auth.service';
import { ComentarioService } from 'src/app/service/comentario.service';

@Component({
  selector: 'app-miscomentarios',
  templateUrl: './miscomentarios.page.html',
  styleUrls: ['./miscomentarios.page.scss'],
})
export class MiscomentariosPage implements OnInit {

  miscomentarios: Observable<Comentario[]>;

  constructor(
    public comentaService: ComentarioService,
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.getCurrentUser().subscribe(
      () => this.miscomentarios = this.comentaService.getMisComentarios()
    );
  }

  ngOnInit() {
  }

  goEditComentario(id: string) {
    this.router.navigateByUrl('edit-comentario/' + id);
  }
}
