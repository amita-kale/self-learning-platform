import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-crud-service-table',
  templateUrl: './crud-service-table.component.html',
  styleUrls: ['./crud-service-table.component.css'],
})
export class CrudServiceTableComponent implements OnInit {
  students = [];
  constructor(private router: Router, private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }
  routeFunction() {
    this.router.navigate(['service/serviceform']);
  }
  deleteFunction(i, item) {
    this.studentService.delStudents(i);
  }
  editFunction(i, item) {
    this.router.navigate(['service/serviceform/' + i]);
  }
}
