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
            level: '3+ years',
            technologies: [
                {
                    name: Technologies.Javascript,
                    hasWiki: true,
                    image: '../../assets/img/js.svg'
                },
                {
                    name: Technologies.Css,
                    hasWiki: true,
                    image: '../../assets/img/css.svg'
                },
                {
                    name: Technologies.Html,
                    hasWiki: true,
                    image: '../../assets/img/html.svg'
                },
                {
                    name: Technologies.Git,
                    hasWiki: true,
                    image: '../../assets/img/git.svg'
                }
            ]
        },
        {
            level: '2 years',
            technologies: [
                {
                    name: Technologies.Angular,
                    image: '../../assets/img/angular.svg',
                    hasWiki: true
                },
                {
                    name: Technologies.Typescript,
                    image: '../../assets/img/ts.svg',
                    hasWiki: true
                },
                {
                    name: Technologies.Figma,
                    image: '../../assets/img/figma.svg',
                    hasWiki: false,
                    externalUrl: 'https://www.figma.com/'
                },
                {
                    name: Technologies.Teamcity,
                    image: '../../assets/img/teamcity.svg',
                    hasWiki: true
                },
                {
                    name: Technologies.Octopus,
                    image: '../../assets/img/octopus.svg',
                    hasWiki: false,
                    externalUrl: 'https://octopus.com/'
                },
            ]
        },
        {
            level: 'Other skills & experience',
            technologies: [
                {
                    name: Technologies.Design
                },
                {
                    name: Technologies.Servers
                },
                {
                    name: Technologies.Preprocessors
                },
                {
                    name: Technologies.Wordpress
                },
                {
                    name: Technologies.Sql
                },
                {
                    name: Technologies.Vectors
                },
            ]
        }
    ],
    education: [
        {
            school: 'University of Minnesota',
            city: 'Minneapolis, MN',
            degree: 'Computer Science, B.A.',
            image: '../../assets/img/umn.svg'
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
