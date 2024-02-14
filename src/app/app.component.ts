import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

  editEmployee(data: any) {

  }
  
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (result) => {
        alert('Employee deleted');
        this.fetchEmployeeData();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
