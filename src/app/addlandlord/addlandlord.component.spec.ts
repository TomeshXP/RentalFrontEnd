import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlandlordComponent } from './addlandlord.component';

describe('AddlandlordComponent', () => {
  let component: AddlandlordComponent;
  let fixture: ComponentFixture<AddlandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlandlordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddlandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
