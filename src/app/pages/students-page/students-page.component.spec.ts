import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPageComponent } from './students-page.component';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';

xdescribe('Pruebas de StudentsPageComponent', () => {
  let component: StudentsPageComponent;
  let fixture: ComponentFixture<StudentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsPageComponent ],
      imports: [StudentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
