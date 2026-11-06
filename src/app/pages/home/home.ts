import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { form, FormField } from '@angular/forms/signals';
import { filter, switchMap } from 'rxjs';
import { ApiService } from '../../services/api-service';
import { Card } from '../../components/card/card';

@Component({
  imports: [FormField, Card],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  private apiService = inject(ApiService)

  formValues = signal({ search: '' })
  submittedValues = signal({ search: '' })
  form = form(this.formValues)

  shows = toSignal(
    toObservable(this.submittedValues).pipe(
      filter(text => !!text),
      switchMap(text => this.apiService.getSearchShows(text.search))
    )
  )

  onSubmit(event: Event) {
    event.preventDefault()
    this.submittedValues.set(this.formValues())
  }
}
