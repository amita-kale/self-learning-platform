import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiffmoduleService {
  students = [];
  constructor() {}
  addData(student) {
    this.students.push(student);
  }
  returnStudents() {
    return this.students;
  }
  getSpecificStudentByIndex(i) {
    return this.students[i];
  }
  updateStudent(index, student) {
    this.students[index] = student;
  }
  deleteStudent(i) {
    this.students.splice(i, 1);
  }
}
