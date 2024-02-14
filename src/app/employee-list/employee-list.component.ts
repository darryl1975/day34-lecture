import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
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
    throw new Error('Method not implemented.');
  }

}
