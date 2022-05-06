import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
    
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
