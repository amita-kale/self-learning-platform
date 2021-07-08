import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-using-angular',
  templateUrl: './crud-using-angular.component.html',
  styleUrls: ['./crud-using-angular.component.css'],
})
export class CrudUsingAngularComponent implements OnInit {
  lineEdit = -1;
  isEdit = false;
  students = [
    // rollno: null,
    // name: '',
    // class: '',
    // gender: '',
  ];

  constructor() {}

  ngOnInit(): void {}

  student = {
    rollno: null,
    name: '',
    class: '',
    gender: '',
  };

  submitData() {
    var student = {
      rollno: this.student.rollno,
      name: this.student.name,
      class: this.student.class,
      gender: this.student.gender,
    };
    if (this.isEdit == true) {
      this.students[this.lineEdit] = student;
      this.isEdit = false;
      this.lineEdit = -1;
    } else {
      this.students.push(student);
    }

    this.student.rollno = '';
    this.student.name = '';
    this.student.class = '';
    this.student.gender = '';
  }
  resetFunction() {
    this.isEdit = false;
    this.lineEdit = -1;
  }
  editFunction(i, item) {
    this.student.rollno = this.students[i].rollno; //i is index and rollno is objVariable
    this.student.name = this.students[i].name;
    this.student.class = this.students[i].class;
    this.student.gender = this.students[i].gender;
    this.isEdit = true;
    this.lineEdit = i;
  }

  deleteFunction(item, i) {
    console.log(item, i);
    this.students.splice(item, 1);
  }
}
