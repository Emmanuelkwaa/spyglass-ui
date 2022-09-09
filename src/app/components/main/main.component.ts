import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Goal } from 'src/app/models/Goal';
import { Result } from 'src/app/models/Result';
import { GoalService } from 'src/app/services/goal.service';
import { CreateComponent } from '../create/create.component';
import { EditGoalComponent } from '../edit-goal/edit-goal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  searchForm! :FormGroup;
  result! :Result;
  goals :Goal[] = [];
  width :string = '';

  constructor(
    private formBuilder: FormBuilder,
    private goalService: GoalService,
    private dialog :MatDialog
  ) { }

  ngOnInit(): void {
    if (this.detectMob()) {
      this.width = '100%';
    } else {
      this.width = '30%';
    }

    this.searchForm = this.formBuilder.group({
      search: ['',],
    });

    this.getAllGoals();
    
  }

  findGoal() {
    
  }

  calculatePercent(currentlySaved :any, targetAmount :any) :number {
      const percent :number = currentlySaved/targetAmount * 100; 
      return percent;
  }

  getAllGoals() {
    this.goalService.getAllGoals().subscribe({
      next: (res :Result) => {
        this.result = res
        this.result.content.forEach((goal) => this.goals.push(goal));
      },
      error: (err) => {
        alert("Unable to get goals");
      },
    })
  }

  editGoal(goal: Goal) {
    //this.result.content.forEach((goal) => this.goals.push(goal));
    this.dialog.open(EditGoalComponent, {
      width: this.width,
      data: goal
    }).afterClosed().subscribe(val => {
      if(val==="created") {
        
      }
    })
  }

  createGoal() {
    this.dialog.open(CreateComponent, {
      width: this.width,
    }).afterClosed().subscribe(val => {
      if(val==="created") {
        
      }
    })
  }

  detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

}
