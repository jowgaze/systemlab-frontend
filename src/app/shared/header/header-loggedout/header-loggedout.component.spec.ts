import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLoggedoutComponent } from './header-loggedout.component';

describe('HeaderLoggedoutComponent', () => {
  let component: HeaderLoggedoutComponent;
  let fixture: ComponentFixture<HeaderLoggedoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLoggedoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLoggedoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
