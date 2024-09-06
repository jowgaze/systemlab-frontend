import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSessionInfoComponent } from './modal-session-info.component';

describe('ModalSessionInfoComponent', () => {
  let component: ModalSessionInfoComponent;
  let fixture: ComponentFixture<ModalSessionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSessionInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSessionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
