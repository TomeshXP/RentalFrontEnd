import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpropertiesComponent } from './addproperties.component';

describe('AddpropertiesComponent', () => {
  let component: AddpropertiesComponent;
  let fixture: ComponentFixture<AddpropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
