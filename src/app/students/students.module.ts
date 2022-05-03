import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { StudentComponent } from './pages/student/student.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmComponent } from './components/confirm/confirm.component';







@NgModule({
  declarations: [
    AddComponent,
    StudentComponent,
    HomeComponent,
    ListComponent,
    SearchComponent,
    StudentCardComponent,
    ImagenPipe,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    StudentsRoutingModule,
    FormsModule
  ]
})
export class StudentsModule { }
