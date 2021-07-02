import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUsingJSComponent } from './crud-using-js.component';

describe('CrudUsingJSComponent', () => {
  let component: CrudUsingJSComponent;
  let fixture: ComponentFixture<CrudUsingJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUsingJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUsingJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
