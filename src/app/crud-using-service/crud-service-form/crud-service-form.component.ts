import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-crud-service-form',
  templateUrl: './crud-service-form.component.html',
  styleUrls: ['./crud-service-form.component.css'],
})
export class CrudServiceFormComponent implements OnInit {
  constructor(
    private router: Router,
    private studentService: StudentService,
    private routeParam: ActivatedRoute
  ) {}
  isEdit = false;
  index = -1;

  student = {
    rollno: null,
    name: '',
    class: '',
    gender: '',
  };
  ngOnInit(): void {
    console.log(this.routeParam.snapshot.params.ui);
    if (this.routeParam.snapshot.params.ui) {
      this.isEdit = true;
      const stud = this.studentService.getSpecificStudentByIndex(
        this.routeParam.snapshot.params.ui
      );
      this.student = {
        rollno: stud.rollno,
        name: stud.name,
        class: stud.class,
        gender: stud.gender,
      };
    }
  }

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
