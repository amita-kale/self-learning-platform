import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUsingAngularComponent } from './crud-using-angular.component';

describe('CrudUsingAngularComponent', () => {
  let component: CrudUsingAngularComponent;
  let fixture: ComponentFixture<CrudUsingAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUsingAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUsingAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
