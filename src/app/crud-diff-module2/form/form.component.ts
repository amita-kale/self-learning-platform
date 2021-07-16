import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiffmoduleService } from 'src/app/diffmodule.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  isEdit = false;
  index = -1;
  student = {
    rollno: null,
    name: '',
    class: '',
    gender: '',
  };
  constructor(
    private diffmoduleService: DiffmoduleService,
    private router: Router,
    private routeParam: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.routeParam.snapshot.params.i) {
      this.isEdit = true;
      const stud = this.diffmoduleService.getSpecificStudentByIndex(
        this.routeParam.snapshot.params.i
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
    if (this.isEdit == false) {
      this.diffmoduleService.addData(student);
    } else {
      this.diffmoduleService.updateStudent(
        this.routeParam.snapshot.params.i,
        student
      );
    }

    this.router.navigate(['diff-module-service/table']);
  }
  resetFunction() {}
}
