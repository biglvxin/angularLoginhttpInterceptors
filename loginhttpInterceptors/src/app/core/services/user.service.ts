import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userId: string = null;
  userInfo$: BehaviorSubject<{}> = new BehaviorSubject<{}>({});
  userId$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(private http: HttpClient) { }
  setUserId(userId: string = null) {
    this.userId = userId ? userId.toUpperCase() : null;
  }
  getUserId() {
    return this.userId || localStorage.getItem('userId');
  }
  setUserInfo(data: any) {
    this.setUserId(data.userId);
    this.userInfo$.next(data);
  }
  getUserDetails(): Observable<any> {
    const url = '../../../assets/json/user.details.json';
    return this.http.get(url).pipe(
      tap((user) => {
      console.log(user);
    }));
  }
}
