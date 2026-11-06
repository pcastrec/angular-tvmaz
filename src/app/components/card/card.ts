import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Show } from '../../services/api-service';
import { FavoriteService } from '../../services/favorite-service';

@Component({
  imports: [RouterLink],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {

  private favoriteService = inject(FavoriteService)

  show = input.required<Show>()
}
