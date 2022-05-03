import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publisher, Student } from '../../interfaces/students.interface';
import { StudentsService } from '../../services/students.service';
import { switchMap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 5px;
  }
`
  ]
})
export class AddComponent implements OnInit {

  student: Student = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    city: '',
    alt_img: '',
    publisher: Publisher.Name,
  }

  constructor(private studentsService: StudentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    if (this.router.url.includes('edit')) {
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.studentsService.getStudentById(id)),
      )
      .subscribe(student => this.student = student);

  }

  save() {
    if (this.student.name.trim().length === 0) {
      return;
    }

    if (this.student.id) {
      this.studentsService.studentUpdate(this.student)
        .subscribe(student => this.snackbarShow('Updated register'))
    } else {
      this.studentsService.studentAdd(this.student)
        .subscribe(student => {
          this.router.navigate(['/students/edit', student.id]);
          this.snackbarShow('Created register')
        })

    }
  }

  remove() {

    const dialog = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: this.student
    });

    dialog.afterClosed().subscribe(
      (answer) => {
        if (answer) {
          this.studentsService.studentDelete(this.student.id!)
            .subscribe(ans => {
              this.router.navigate(['/students']);
            });
        }
      }
    )

  }

  snackbarShow(msg: string) {

    this.snackBar.open(msg, 'okey!', {
      duration: 2500
    });

  }
}






