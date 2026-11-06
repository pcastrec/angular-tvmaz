import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AllowAdult } from '../services/allow-adult';

export const adultGuard: CanActivateFn = (route, state) => {
  const service = inject(AllowAdult)
  return service.allowed();
};
