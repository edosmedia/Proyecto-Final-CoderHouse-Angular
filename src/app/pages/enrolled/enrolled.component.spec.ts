import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledComponent } from './enrolled.component';

xdescribe('EnrolledComponent', () => {
  let component: EnrolledComponent;
  let fixture: ComponentFixture<EnrolledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
