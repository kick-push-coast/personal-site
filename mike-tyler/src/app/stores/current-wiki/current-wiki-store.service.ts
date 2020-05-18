import { Injectable } from '@angular/core';
import { HttpRepositoryService } from 'src/app/repositories/http-repository/http-repository.service';
import { Technologies } from 'src/app/enums/technologies';
import { Observable, Subject } from 'rxjs';
import { WikiModel } from './model/current-wiki';


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

    public wikiOpen: boolean;
    public wikiLoading: boolean;
    public currentWiki: WikiModel;
    public currentWiki$: Observable<WikiModel>;
    private currentWikiSource: Subject<WikiModel>;
    private currentPageId: number;

    wikiApiUrl = 'https://en.wikipedia.org/w/api.php';
    wikiParams = 'format=json&action=query&prop=pageimages|info|extracts&exintro&explaintext&inprop=url&exintro&redirects=1&origin=*';

    constructor(
        private httpRepository: HttpRepositoryService
    ) {
        this.currentWikiSource = new Subject<WikiModel>();
        this.currentWiki$ = this.currentWikiSource.asObservable();
    }

    openWiki(page: Technologies) {
        if (!this.currentWiki || (page !== this.currentWiki.tech)) {
            this.wikiOpen = true;
            this.wikiLoading = true;
            this.requestWiki(page);
        } else {
            this.wikiOpen = true;
        }
    }

    closeWiki() {
        this.wikiOpen = false;
    }

    private requestWiki(page: Technologies) {
        const url = this.buildUrl(page);
        this.httpRepository.get(url).subscribe(response => {
            if (response && response.query && response.query.pages[this.currentPageId]) {
                this.currentWiki = this.buildWikiObject(response, page);
                this.currentWikiSource.next(this.currentWiki);
                this.wikiLoading = false;
            }
        });
    }

    private buildUrl(page: Technologies) {
        this.currentPageId = pageIdDictionary.get(page);
        return this.wikiApiUrl +
                '?' +
                this.wikiParams +
                '&pageids=' +
                this.currentPageId;
    }

    private buildWikiObject(response: any, tech: Technologies) {
        const pageMeta = response.query.pages[this.currentPageId];
        const wikiObject: WikiModel = {
            title: pageMeta.title,
            url: pageMeta.fullurl,
            summary: pageMeta.extract,
            image: pageMeta.thumbnail,
            tech
        };
        return wikiObject;
    }
}
