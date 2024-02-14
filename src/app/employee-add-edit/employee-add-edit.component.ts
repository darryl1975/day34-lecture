import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.css']
})
export class EmployeeAddEditComponent implements OnInit{

  empForm!: FormGroup;

  constructor(private employeeService: EmployeeService,
    private dialogRef: MatDialogRef<EmployeeAddEditComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.empForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onSubmit(): void {
    if (this.empForm.valid) {
      if (this.data) {
        // update
        this.employeeService.updateEmployee(this.data.id, this.empForm.value)
        .subscribe({
          next: (val) => {
            alert("Record updated successfully");
            this.dialogRef.close();
          },
          error: (err) => {
            console.error("Error updating record");
          }
        })
      } else {
        // create
        this.employeeService.addEmployee(this.empForm.value)
        .subscribe({
          next: (val) => {
            alert("Record created successfully");
            this.dialogRef.close();
          },
          error: (err) => {
            console.error("Error creating record");
          }
        })
      }
    } 
  }
}
