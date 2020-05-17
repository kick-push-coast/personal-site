import { Injectable, OnInit } from '@angular/core';
import { UserModel } from './model/user-model';
import { Technologies } from 'src/app/enums/technologies';
import { Observable, Subject } from 'rxjs';

const sampleUser: UserModel = {
    name: 'Mike Tyler',
    title: 'UX/UI Engineer',
    city: 'Minneapolis, MN',
    avatar: '../../assets/img/portraitoutlinemd.svg',
    experience : [
        {
            years: '3+',
            technologies: [
                {
                    name: Technologies.Javascript,
                    sublist: [
                        'ES5/ES6',
                        'jQuery'
                    ]
                },
                {
                    name: Technologies.Css,
                    sublist: [
                        'SASS/SCSS',
                        'BEM'
                    ]
                },
                {
                    name: Technologies.Html,
                    sublist: [
                        'WCAG 2.0 accessibility',
                        'jQuery'
                    ]
                },
                {
                    name: Technologies.Git,
                    sublist: [
                        'Command line',
                        'Github'
                    ]
                }
            ]
        },
        {
            years: '2',
            technologies: [
                {
                    name: Technologies.Angular
                },
                {
                    name: Technologies.Typescript
                },
                {
                    name: Technologies.Figma
                },
                {
                    name: Technologies.Teamcity
                },
                {
                    name: Technologies.Octopus
                },
            ]
        }
    ],
    education: [
        {
            school: 'University of Minnesota',
            city: 'Minneapolis, MN',
            degree: 'Computer Science, B.A.'
        }
    ]
};

@Injectable({
    providedIn: 'root'
})
export class CurrentUserStoreService {

    public currentUser$: Observable<UserModel>;
    public currentUser: UserModel;

    private currentUserSource: Subject<UserModel>;

    constructor() {
        this.currentUserSource = new Subject<UserModel>();
        this.currentUser$ = this.currentUserSource.asObservable();

        this.setCurrentUserInfo();
    }

    setCurrentUserInfo() {
        this.currentUser = sampleUser;
        this. currentUserSource.next(this.currentUser);
    }

}
