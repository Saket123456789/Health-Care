import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedDoctorComponent } from './top-rated-doctor.component';

describe('TopRatedDoctorComponent', () => {
  let component: TopRatedDoctorComponent;
  let fixture: ComponentFixture<TopRatedDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRatedDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopRatedDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
