import { Injectable } from '@angular/core';
import { HttpRepositoryService } from 'src/app/repositories/http-repository/http-repository.service';
import { Technologies } from 'src/app/enums/technologies';
import { Observable } from 'rxjs';


const pageIdDictionary: Map<Technologies, number> = new Map([
    [Technologies.Javascript, 9845],
    [Technologies.Html, 13191],
    [Technologies.Css, 23290197],
    [Technologies.Angular, 53385622],
    [Technologies.Typescript, 8157205],
    [Technologies.Git, 1771747],
    [Technologies.Teamcity, 43289310]
]);

@Injectable({
    providedIn: 'root'
})
export class CurrentWikiStoreService {

    wikiApiUrl = 'https://en.wikipedia.org/w/api.php';
    wikiParams = 'format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*';

    constructor(
        private httpRepository: HttpRepositoryService
    ) {
    }

    getWikiExtract(page: Technologies): Observable<any> {
        const url = this.buildUrl(page);
        return this.httpRepository.get(url);
    }

    buildUrl(page: Technologies) {
        const pageId = pageIdDictionary.get(page);
        return this.wikiApiUrl +
                '?' +
                this.wikiParams +
                '&pageids=' +
                pageId;
    }
}
