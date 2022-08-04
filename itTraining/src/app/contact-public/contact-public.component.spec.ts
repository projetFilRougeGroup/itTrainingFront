import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPublicComponent } from './contact-public.component';

describe('ContactPublicComponent', () => {
  let component: ContactPublicComponent;
  let fixture: ComponentFixture<ContactPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
