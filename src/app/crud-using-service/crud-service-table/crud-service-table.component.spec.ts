import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudServiceTableComponent } from './crud-service-table.component';

describe('CrudServiceTableComponent', () => {
  let component: CrudServiceTableComponent;
  let fixture: ComponentFixture<CrudServiceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudServiceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudServiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
