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
        this.checkAnimation();
    }

    checkAnimation() {
        const scroll = window.pageYOffset + window.innerHeight;

        // for (let i = 0; i < this.offsets.length; i++) {
        //     if (scroll >= this.offsets[i]) {
        //         if (this.tiles[i].children[1]) {
        //             this.tiles[i].children[1].children[0].classList.add('block--skills__h2--show');
        //         }
        //         if (this.tiles[i].children[0].classList) {
        //             this.tiles[i].children[0].classList.add('block--skills__icon--animate');
        //         }

        //         for (let j = 1; j < this.tiles[i].children[1].children.length; j++) {
        //             if (this.tiles[i].children[1]) {
        //                 this.tiles[i].children[1].children[j].classList.add('block--skills__h3--show');
        //             }
        //         }
        //     }
        // }

        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        document.querySelector('.footer__link--contact').classList.add('footer__link--contact-animate');
        const links = document.querySelectorAll('.footer__link--social');
        for (let k = 0; k < links.length; k++) {
            links[k].classList.add('footer__link--social-animate');
        }
        }
    };

}
