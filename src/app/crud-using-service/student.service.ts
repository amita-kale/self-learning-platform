import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentsdata = [];
  constructor() {}
  addStudents(student) {
    this.studentsdata.push(student);
  }
  getStudents() {
    return this.studentsdata;
  }
  delStudents(i) {
    this.studentsdata.splice(i, 1);
  }
  updateStudent(index, student) {
    this.studentsdata[index] = student;
  }
  getSpecificStudentByIndex(index) {
    return this.studentsdata[index];
  }
}
