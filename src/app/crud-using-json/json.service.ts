import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get('http://localhost:3000/students');
  }
  getSpecificData(id) {
    return this.httpClient.get('http://localhost:3000/students/' + id);
  }
  addData(student) {
    return this.httpClient.post('http://localhost:3000/students', student);
  }

  delData(id) {
    return this.httpClient.delete('http://localhost:3000/students/' + id);
  }
  updateStudent(id, item) {
    return this.httpClient.put('http://localhost:3000/students/' + id, item);
  }
}
