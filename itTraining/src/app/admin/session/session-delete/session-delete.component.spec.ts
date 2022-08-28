import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDeleteComponent } from './session-delete.component';

describe('SessionDeleteComponent', () => {
  let component: SessionDeleteComponent;
  let fixture: ComponentFixture<SessionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
