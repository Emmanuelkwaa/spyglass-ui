import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from '../models/Goal';
import { environment } from 'src/environments/environment';
import { Result } from '../models/Result';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  goalUrl = "/goals"

  constructor(private http: HttpClient) { }

  getAllGoals() :Observable<Result> {
    return this.http.get<Result>(`${environment.baseUrl}${this.goalUrl}`);
  }

  createGoals(goal :Goal) :Observable<Result> {
    return this.http.post<Result>(`${environment.baseUrl}${this.goalUrl}`, goal);
  }

  updateGoal(goal: Goal) :Observable<Result> {
    return this.http.put<Result>(`${environment.baseUrl}${this.goalUrl}/${goal.id}`, goal)
  }
}
