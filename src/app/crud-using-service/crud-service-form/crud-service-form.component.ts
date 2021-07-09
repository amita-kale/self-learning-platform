import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-crud-service-form',
  templateUrl: './crud-service-form.component.html',
  styleUrls: ['./crud-service-form.component.css'],
})
export class CrudServiceFormComponent implements OnInit {
  constructor(private router: Router, private studentService: StudentService) {}
  isEdit = false;
  ngOnInit(): void {}
  students = [];
  student = {
    rollno: null,
    name: '',
    class: '',
    gender: '',
  };
  submitData() {
    const student = {
      rollno: this.student.rollno,
      name: this.student.name,
      class: this.student.class,
      gender: this.student.gender,
    };
    this.studentService.addStudents(student);
    this.router.navigate(['service/servicecrud']);
  }
  resetFunction() {}
}
