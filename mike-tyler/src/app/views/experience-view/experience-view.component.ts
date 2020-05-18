import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrentUserStoreService } from 'src/app/stores/current-user/current-user-store.service';
import { UserModel, TechnologyModel } from 'src/app/stores/current-user/model/user-model';
import { Subscription } from 'rxjs';
import { CurrentWikiStoreService } from 'src/app/stores/current-wiki/current-wiki-store.service';
import { Technologies } from 'src/app/enums/technologies';

@Component({
    selector: 'app-experience-view',
    templateUrl: './experience-view.component.html',
    styleUrls: ['./experience-view.component.scss']
})
export class ExperienceViewComponent implements OnInit, OnDestroy {

    user: UserModel;
    private userSubscription: Subscription;

    constructor(
        private currentUserStore: CurrentUserStoreService,
        private currentWikiStore: CurrentWikiStoreService
    ) { }

    ngOnInit() {
        this.setUser();
        this.subscribeUser();
    }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

    setUser() {
        this.user = this.currentUserStore.currentUser;
    }

    subscribeUser() {
        this.userSubscription = this.currentUserStore.currentUser$.subscribe(user => {
            this.user = user;
        });
    }

    openWiki(tech: TechnologyModel) {
        if (tech.hasWiki) {
            this.currentWikiStore.openWiki(tech.name);
        }
    }

}
