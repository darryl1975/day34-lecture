import { Component, Inject, ViewChild } from '@angular/core';
import { EmployeeService } from './employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

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

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  // MatPaginator Inputs
  length = 5;
  pageSize = 2;

  constructor(private employeeService: EmployeeService,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {

    this.fetchEmployeeData();
  }

  fetchEmployeeData() {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  openAddNewEmployeeDialog() {
    const dialogRef = this.dialog.open(EmployeeAddEditComponent);

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        alert("New Record created!");
        // if (result) {
        //   this.fetchEmployeeData();
        // }
      },
      complete: () => {
        this.fetchEmployeeData();
      }
    });
  }

  editEmployee(data: any) {
    const dialogRef = this.dialog.open(EmployeeAddEditComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.fetchEmployeeData();
        }
      }
    });
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
