import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRouteSnapshot, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'mike-tyler';

    public constructor(
        private titleService: Title,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let child = this.route.firstChild;
                while (child) {
                    if (child.firstChild) {
                        child = child.firstChild;
                    // tslint:disable-next-line: no-string-literal
                    } else if (child.snapshot.data &&    child.snapshot.data['title']) {
                        // tslint:disable-next-line: no-string-literal
                        return child.snapshot.data['title'];
                    } else {
                        return null;
                    }
                }
                return null;
            })
        ).subscribe( (data: any) => {
            if (data) {
                this.titleService.setTitle('Mike Tyler | ' + data);
            }
        });
    }
}
