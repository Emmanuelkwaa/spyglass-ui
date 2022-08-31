import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  searchForm! :FormGroup;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

    this.searchForm = this.formBuilder.group({
      search: ['',],
    });
  }

  findGoal() {}

}
