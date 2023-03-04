import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsComponent } from './subjects.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FirestoreModule } from '@angular/fire/firestore';
import { FirebaseService } from '../../services/firebase.service';

xdescribe('SubjectsComponent', () => {
  let component: SubjectsComponent;
  let fixture: ComponentFixture<SubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectsComponent],
      imports: [MatDialogModule, FirestoreModule],
      providers: [FirebaseService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
