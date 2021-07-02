import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUsingHTMLComponent } from './crud-using-html.component';

describe('CrudUsingHTMLComponent', () => {
  let component: CrudUsingHTMLComponent;
  let fixture: ComponentFixture<CrudUsingHTMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudUsingHTMLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUsingHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
