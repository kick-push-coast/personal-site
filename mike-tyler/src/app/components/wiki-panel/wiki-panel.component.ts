import { Component, OnInit, HostListener } from '@angular/core';
import { CurrentWikiStoreService } from 'src/app/stores/current-wiki/current-wiki-store.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-wiki-panel',
    templateUrl: './wiki-panel.component.html',
    styleUrls: ['./wiki-panel.component.scss'],
    animations: [
        trigger('fadeEnter', [
        transition(
            ':enter',
            [
                style({ opacity: 0 }),
                animate('300ms ease-in',
                    style({ opacity: 1 }))
            ]
        )
        ]),
        trigger('fadeSlideEnter', [
        transition(
            ':enter',
            [
                style({ opacity: 0, transform: 'translateX(10%)' }),
                animate('200ms ease-in',
                    style({ opacity: 1, transform: 'translateX(0%)' }))
            ]
        )
        ])
    ]
})
export class WikiPanelComponent implements OnInit {

    constructor(
        public currentWikiStore: CurrentWikiStoreService
    ) { }

    ngOnInit() {
    }

    @HostListener('document:keydown.escape', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        this.currentWikiStore.closeWiki();
    }

}
