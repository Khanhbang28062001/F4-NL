import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserIDService {

  private userIdSource = new BehaviorSubject<Number>(0);
  currentUserId = this.userIdSource.asObservable();

  constructor() { }

  changeUserId(userId: Number) {
    this.userIdSource.next(userId)

  }
  getCurrentUserId() {
    this.currentUserId.subscribe((data) => {
      return data;
    });
  }
}