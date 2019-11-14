import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagNotfoundComponent } from './pag-notfound.component';

describe('PagNotfoundComponent', () => {
  let component: PagNotfoundComponent;
  let fixture: ComponentFixture<PagNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
