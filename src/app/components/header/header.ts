import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AllowAdult } from '../../services/allow-adult';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

  private allowedService = inject(AllowAdult)
}
