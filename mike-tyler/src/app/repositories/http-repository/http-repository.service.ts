import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpRepositoryService {

    constructor(
        private httpClient: HttpClient
    ) { }

    public get(url: string, params?, type: string = 'json'): Observable<any> {

        const options: any = {
            params: { },
            responseType: type
        };

        if (params) {
            options.params = params;
        }

        return this.httpClient.get<any>(url, options);
    }
}
