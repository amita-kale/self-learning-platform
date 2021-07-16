import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiffmoduleService } from 'src/app/diffmodule.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  students = [];
  constructor(
    private router: Router,
    private diffmoduleService: DiffmoduleService
  ) {}

  ngOnInit(): void {
    this.students = this.diffmoduleService.returnStudents();
  }
  routeFunction() {
    this.router.navigate(['diff-module-service-form/form']);
  }
  editFunction(i, item) {
    this.router.navigate(['diff-module-service-form/form/' + i]);
  }
  deleteFunction(i) {
    this.diffmoduleService.deleteStudent(i);
  }
}
