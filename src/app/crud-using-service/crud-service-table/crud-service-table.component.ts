import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-service-table',
  templateUrl: './crud-service-table.component.html',
  styleUrls: ['./crud-service-table.component.css'],
})
export class CrudServiceTableComponent implements OnInit {
  students = [];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  routeFunction() {
    this.router.navigate(['serviceform']);
  }
}
