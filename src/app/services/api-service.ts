import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { finalize, forkJoin } from 'rxjs';

export interface Show {
    show: {
        id: number,
        name: string,
        image: {
            medium: string
        }
    }
}

export interface Episode {
    id: number,
    name: string,
    season: number,
    number: number
}

export interface ShowDetail {
    id: number,
    name: string,
    status: string,
    image: { original: string, medium: string },
    summary: string,
    _embedded: {
        episodes : Episode[]
    }
}

@Service()
export class ApiService {

    private baseURL = "https://api.tvmaze.com/"
    private http = inject(HttpClient)

    private _loading = signal(false)
    loading = this._loading.asReadonly()

    getSearchShows(query: string) {
        this._loading.set(true)
        return this.http.get<Show[]>(`${this.baseURL}search/shows?q=${query}`)
            .pipe(
                finalize(() => this._loading.set(false))
            )
    }

    getShows(ids: number[]) {
        this._loading.set(true)
        return forkJoin(
            ids.map(id => this.http.get<ShowDetail>(`${this.baseURL}shows/${id}`))
        ).pipe(
            finalize(() => this._loading.set(false))
        )
    }

    getDetailShow(id: number) {
        this._loading.set(true)
        return this.http.get<ShowDetail>(`${this.baseURL}shows/${id}?embed=episodes`)
            .pipe(
                finalize(() => this._loading.set(false))
            )
    }
}
