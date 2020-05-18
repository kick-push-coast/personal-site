import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import '../../../assets/js/dotgame.js';

declare var initGame: any;
declare var reset: any;

@Component({
    selector: 'app-dot-game',
    templateUrl: './dot-game.component.html',
    styleUrls: ['./dot-game.component.scss']
})
export class DotGameComponent implements AfterViewInit, OnDestroy {

    constructor() { }

    ngAfterViewInit() {
        this.init();
    }

    ngOnDestroy() {
        // tslint:disable-next-line: no-unused-expression
        new reset();
        // tslint:disable-next-line: no-unused-expression
        new initGame();
    }

    init() {
        // tslint:disable-next-line: no-unused-expression
        new initGame();
    }

}
