import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoginComponent } from './modal-login.component';

describe('ModalLoginComponent', () => {
  let component: ModalLoginComponent;
  let fixture: ComponentFixture<ModalLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
