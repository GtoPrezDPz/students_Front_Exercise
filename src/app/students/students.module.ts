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
import { StudentCardComponent } from './components/student-card/student-card.component';
import { ImagenPipe } from './pipes/imagen.pipe';






@NgModule({
  declarations: [
    AddComponent,
    StudentComponent,
    HomeComponent,
    ListComponent,
    SearchComponent,
    StudentCardComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
