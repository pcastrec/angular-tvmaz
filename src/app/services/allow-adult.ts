import { Service, signal } from '@angular/core';

@Service()
export class AllowAdult {

    private _allowed = signal(false)
    allowed = this._allowed.asReadonly()

    toggle() {
        this._allowed.update(value => !value)
    }
}
