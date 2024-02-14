import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'salary',
    'action'
  ];

  dataSource!: MatTableDataSource<any>;

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.fetchEmployeeData();
  }

  fetchEmployeeData() {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<any>(data);

      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
