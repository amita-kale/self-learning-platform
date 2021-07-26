import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css'],
})
export class JsonFormComponent implements OnInit {
  isEdit = false;
  index = -1;
  student = {
    rollno: null,
    name: '',
    class: '',
    gender: '',
  };
  constructor(
    private jsonService: JsonService,
    private routeParam: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.routeParam.snapshot.params.id) {
      this.jsonService
        .getSpecificData(this.routeParam.snapshot.params.id)
        .subscribe((student: any) => {
          this.student = student;
          this.isEdit = true;
          this.index = this.routeParam.snapshot.params.id;
        });
    }
  }
  submitData() {
    const student = {
      rollno: this.student.rollno,
      name: this.student.name,
      class: this.student.class,
      gender: this.student.gender,
    };
    if (this.isEdit == true) {
      this.jsonService.updateStudent(this.index, student).subscribe(() => {
        this.router.navigate(['/crud-using-json/table']);
      });
    } else {
      this.jsonService.addData(student).subscribe(() => {
        this.router.navigate(['/crud-using-json/table']);
      });
    }
  }
  resetFunction() {}
}
