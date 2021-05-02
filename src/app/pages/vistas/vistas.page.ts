import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/service/serie.service';
import { Observable } from 'rxjs';
import { Serie } from 'src/app/model/serie';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.page.html',
  styleUrls: ['./vistas.page.scss'],
})
export class VistasPage implements OnInit {

  vistas: Observable<Serie[]>;

  constructor( 
    public serieService: SerieService,
    private authService: AuthService) {
      this.authService.getCurrentUser().subscribe(
        () => this.vistas = serieService.getVistas(),
      );
     }

  ngOnInit() {
  }

}
