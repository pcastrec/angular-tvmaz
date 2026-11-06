import { Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { filter, switchMap } from 'rxjs';
import { ApiService } from '../../services/api-service';

@Component({
  imports: [],
  selector: 'app-detail',
  styleUrl: './detail.css',
  templateUrl: './detail.html',
})
export class Detail {

  private apiService = inject(ApiService)

  id = input.required<number>()

  show = toSignal(
    toObservable(this.id).pipe(
      filter(id => !!id),
      switchMap(id => this.apiService.getDetailShow(id))
    )
  )
}
