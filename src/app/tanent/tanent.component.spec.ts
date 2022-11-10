import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanentComponent } from './tanent.component';

describe('TanentComponent', () => {
  let component: TanentComponent;
  let fixture: ComponentFixture<TanentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
