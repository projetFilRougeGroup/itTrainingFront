import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEditComponent } from './f-edit.component';

describe('FEditComponent', () => {
  let component: FEditComponent;
  let fixture: ComponentFixture<FEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
