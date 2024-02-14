import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewslistComponent } from './newslist/newslist.component';
import { PostListComponent } from './post/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeAddEditComponent,
    NewslistComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
