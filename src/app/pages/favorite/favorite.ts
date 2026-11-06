import { Component, inject } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { Card } from '../../components/card/card';
import { ApiService } from '../../services/api-service';
import { FavoriteService } from '../../services/favorite-service';

@Component({
  imports: [RouterLink, Card],
  selector: 'app-favorite',
  styleUrl: './favorite.css',
  templateUrl: './favorite.html',
})
export class Favorite {

  private favoriteService = inject(FavoriteService)
  private apiService = inject(ApiService)

  shows = toSignal(
    toObservable(this.favoriteService.favorites)
      .pipe(
        switchMap(ids => this.apiService.getShows(ids))
      ), { initialValue: []}
  )
}
