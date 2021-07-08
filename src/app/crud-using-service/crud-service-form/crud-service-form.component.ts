import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-service-form',
  templateUrl: './crud-service-form.component.html',
  styleUrls: ['./crud-service-form.component.css'],
})
export class CrudServiceFormComponent implements OnInit {
  constructor() {}
  isEdit = false;
  ngOnInit(): void {}
  student = {
    rollno: null,
    name: '',
    class: '',
    gender: '',
  };
  submitData() {}
  resetFunction() {}
}
