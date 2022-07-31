import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerFormationComponent } from './lister-formation.component';

describe('ListerFormationComponent', () => {
  let component: ListerFormationComponent;
  let fixture: ComponentFixture<ListerFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
