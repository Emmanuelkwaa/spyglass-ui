import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Goal } from 'src/app/models/Goal';
import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-edit-goal',
  templateUrl: './edit-goal.component.html',
  styleUrls: ['./edit-goal.component.css']
})
export class EditGoalComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private goalService: GoalService,
    private dialogRef: MatDialogRef<EditGoalComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: Goal,
    private dialog :MatDialog
  ) { }

  editForm = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    targetDate: new FormControl("", Validators.required),
    targetAmount: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
    console.log(this.editData)
    if(this.editData) {
      this.editForm.controls['name'].setValue(this.editData.name);
      this.editForm.controls['description'].setValue(this.editData.description);
      this.editForm.controls['targetDate'].setValue(this.editData.targetDate);
      this.editForm.controls['targetAmount'].setValue(this.editData.targetAmount);
    }
  }

  saveEdit(){
    const goal = new Goal();
    goal.id = this.editData.id;
    goal.name = this.editData.name;
    goal.description = this.editData.description;
    goal.picture = this.editData.picture;
    goal.currentlySaved = this.editData.currentlySaved;
    goal.targetAmount = this.editData.targetAmount;
    goal.targetDate = this.editData.targetDate;
    goal.category = this.editData.category;
    goal.user = this.editData.user;

    this.goalService.updateGoal(goal)
      .subscribe({
        next: (res) => {
          this.dialogRef.close('updated');
          console.log(res)
        },
        error: (err) => {
          alert(err.message);
        }
      })}
}
