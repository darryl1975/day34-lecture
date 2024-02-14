import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  jsonServerUrl : string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  addEmployee(data: any) : Observable<any> {
    return this.httpClient.post(this.jsonServerUrl + "/employees", data);
  }

  deleteEmployee(id: number) : Observable<any>{
    return this.httpClient.delete(this.jsonServerUrl + `/employees/${id}`);
  }

  getEmployees(): Observable<any> {
    return this.httpClient.get(this.jsonServerUrl + "/employees");
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this.httpClient.put(this.jsonServerUrl + `/employees/${id}`, data);
  }

}
