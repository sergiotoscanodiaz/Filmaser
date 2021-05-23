import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/service/serie.service';
import { Observable } from 'rxjs';
import { Serie } from 'src/app/model/serie';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.page.html',
  styleUrls: ['./pendientes.page.scss'],
})
export class PendientesPage implements OnInit {

  pendientes: Observable<Serie[]>;

  constructor(
    private serieService: SerieService,
    private authService: AuthService
  ) {
    this.authService.getCurrentUser().subscribe(
      () => this.pendientes = this.serieService.getPendientes(),
    );
  }

  ngOnInit() {
  }

}
