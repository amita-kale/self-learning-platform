import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudServiceFormComponent } from './crud-service-form.component';

describe('CrudServiceFormComponent', () => {
  let component: CrudServiceFormComponent;
  let fixture: ComponentFixture<CrudServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudServiceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
