import { TestBed } from '@angular/core/testing';
import { FirestoreModule } from '@angular/fire/firestore';

import { FirebaseService } from './firebase.service';

xdescribe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirestoreModule],

    });
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
