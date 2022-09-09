import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Goal } from 'src/app/models/Goal';
import { GoalService } from 'src/app/services/goal.service';
import { EditGoalComponent } from '../edit-goal/edit-goal.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private goalService: GoalService,
    private dialogRef: MatDialogRef<EditGoalComponent>,
    private dialog :MatDialog
  ) { }

  createForm = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    picture: new FormControl("", Validators.required),
    currentlySaved: new FormControl("", Validators.required),
    targetDate: new FormControl("", Validators.required),
    targetAmount: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
  }

  createGoal() {
    if(this.createForm.valid){
      this.goalService.createGoals(this.createForm.value)
      .subscribe({
        next: (res) => {
          this.dialogRef.close('create');
          console.log(res)
        },
        error: (err) => {
          alert(err.message);
        }
      })}
    }

    

}
