import { effect, Service, signal } from '@angular/core';

@Service()
export class FavoriteService {

    private _favorites = signal(this.loadFavorites())
    favorites = this._favorites.asReadonly()

    constructor() {
        effect(() => {
            const favorites = this._favorites()
            localStorage.setItem('favorites', JSON.stringify(favorites))
        })
    }

    loadFavorites() {
        const saved = localStorage.getItem('favorites')
        if(saved) {
            try {
                const parsed = JSON.parse(saved)
                return parsed
            } catch {
                console.warn('Something went wrong ...')
            }
        }
        return []
    }

    addFavorites(id: number) {
        this._favorites.update(ids => [...ids, id])
    }

    removeFavorites(id: number) {
        this._favorites.update(ids => ids.filter((i: number) => i !== id))
    }
}
