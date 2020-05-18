import { Component, OnInit, Input, AfterViewInit, Renderer2 } from '@angular/core';
import { UserModel } from 'src/app/stores/current-user/model/user-model';
import { trigger, transition, style, animate } from '@angular/animations';

export enum viewType {
    intro,
    game
}

@Component({
    selector: 'app-user-header',
    templateUrl: './user-header.component.html',
    styleUrls: ['./user-header.component.scss'],
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
        ])
    ]
})
export class UserHeaderComponent implements OnInit, AfterViewInit {

    @Input() user: UserModel;
    view: viewType;
    viewType = viewType;

    constructor(
        private renderer: Renderer2
    ) { }

    ngOnInit() {
        this.view = viewType.intro;
    }

    ngAfterViewInit() {
        this.initAnimation();
    }

    initAnimation() {
        const introCenter: HTMLElement = document.querySelector('.block--intro__center-inside');
        if (introCenter) {
            introCenter.style.display = 'inline-block';
        }
    }

    switchView() {
        if (this.view === viewType.intro) {
            this.scrollToTop();
            this.renderer.addClass(document.body, 'freeze-scroll');
            this.view = viewType.game;
        } else {
            this.view = viewType.intro;
            this.renderer.removeClass(document.body, 'freeze-scroll');
            setTimeout(() => {
                this.initAnimation();
            }, 300);
        }
    }

    private scrollToTop() {
        const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;
        if (supportsSmoothScroll) {
            window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo(0, 0);
        }
    }

}
