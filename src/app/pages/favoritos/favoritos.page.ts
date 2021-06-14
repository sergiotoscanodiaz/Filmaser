import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/service/serie.service';
import { Observable } from 'rxjs'
import { Serie } from 'src/app/model/serie';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favoritos: Observable<Serie[]>;

  constructor(
    public serieService: SerieService,   
    private authService: AuthService) {
    this.authService.getCurrentUser().subscribe(
      () => this.favoritos = serieService.getFavoritos(),
    );
  }

  ngOnInit() { }
 

}
