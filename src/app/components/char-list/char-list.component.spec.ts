import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharListComponent } from './char-list.component';

describe('CharListComponent', () => {
  let component: CharListComponent;
  let fixture: ComponentFixture<CharListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharListComponent]
    });
    fixture = TestBed.createComponent(CharListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
