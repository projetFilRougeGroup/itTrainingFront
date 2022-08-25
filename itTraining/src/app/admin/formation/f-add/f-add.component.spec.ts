import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAddComponent } from './f-add.component';

describe('FAddComponent', () => {
  let component: FAddComponent;
  let fixture: ComponentFixture<FAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
