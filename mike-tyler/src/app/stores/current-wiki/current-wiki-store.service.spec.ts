import { TestBed } from '@angular/core/testing';

import { CurrentWikiStoreService } from './current-wiki-store.service';

describe('CurrentWikiStoreService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CurrentWikiStoreService = TestBed.get(CurrentWikiStoreService);
        expect(service).toBeTruthy();
    });
});
