import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/service/serie.service';
import { Observable } from 'rxjs';
import { Serie } from 'src/app/model/serie';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-viendo',
  templateUrl: './viendo.page.html',
  styleUrls: ['./viendo.page.scss'],
})
export class ViendoPage implements OnInit {

  seguidas: Observable<Serie[]>;

  constructor(
    public serieService: SerieService,
    private authService: AuthService) {
    this.authService.getCurrentUser().subscribe(
      () => this.seguidas = serieService.getSeguidas(),
    );
  }

  ngOnInit() {
  }

}
