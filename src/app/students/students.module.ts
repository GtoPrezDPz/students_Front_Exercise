import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StudentsRoutingModule } from './students-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { StudentComponent } from './pages/student/student.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';






@NgModule({
  declarations: [
    AddComponent,
    StudentComponent,
    HomeComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
