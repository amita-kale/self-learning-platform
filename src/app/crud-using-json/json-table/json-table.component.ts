import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.css'],
})
export class JsonTableComponent implements OnInit {
  students = [];
  constructor(private jsonService: JsonService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.jsonService.getData().subscribe((response: any) => {
      this.students = response;
    });
  }
  deleteFunction(item) {
    this.jsonService.delData(item.id).subscribe(() => {
      this.getData();
    });
  }
  editFunction(itemId) {
    this.router.navigate(['/crud-using-json/form/' + itemId]);
  }
}
