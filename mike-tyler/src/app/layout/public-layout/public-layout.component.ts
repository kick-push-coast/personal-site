import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {

    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fafafa';
    }

}
