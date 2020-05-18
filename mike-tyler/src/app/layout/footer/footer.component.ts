import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {

    tiles;
    offsets;

    constructor() { }

    ngOnInit() {
        window.onscroll = this.checkAnimation;
        this.tiles = Array.prototype.slice.call(document.querySelectorAll('.block--skills__tile, .block--edu__tile'));
        this.offsets = [];
    }

    ngAfterViewInit() {
    }

    checkAnimation() {
        const scroll = window.pageYOffset + window.innerHeight;

        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        document.querySelector('.footer__link--contact').classList.add('footer__link--contact-animate');
        const links = document.querySelectorAll('.footer__link--social');
        // tslint:disable-next-line: prefer-for-of
        for (let k = 0; k < links.length; k++) {
            links[k].classList.add('footer__link--social-animate');
        }
        }
    };

}
