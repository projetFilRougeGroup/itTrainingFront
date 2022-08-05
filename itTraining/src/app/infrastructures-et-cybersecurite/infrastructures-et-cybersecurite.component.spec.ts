import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructuresEtCybersecuriteComponent } from './infrastructures-et-cybersecurite.component';

describe('InfrastructuresEtCybersecuriteComponent', () => {
  let component: InfrastructuresEtCybersecuriteComponent;
  let fixture: ComponentFixture<InfrastructuresEtCybersecuriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfrastructuresEtCybersecuriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfrastructuresEtCybersecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
