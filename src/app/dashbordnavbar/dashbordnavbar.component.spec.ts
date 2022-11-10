import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordnavbarComponent } from './dashbordnavbar.component';

describe('DashbordnavbarComponent', () => {
  let component: DashbordnavbarComponent;
  let fixture: ComponentFixture<DashbordnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
