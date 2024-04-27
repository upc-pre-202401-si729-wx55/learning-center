import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreateAndEditComponent } from './student-create-and-edit.component';

describe('StudentCreateAndEditComponent', () => {
  let component: StudentCreateAndEditComponent;
  let fixture: ComponentFixture<StudentCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentCreateAndEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
