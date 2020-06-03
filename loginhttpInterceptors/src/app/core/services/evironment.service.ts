import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvironmentService {
  userEnabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(private http: HttpClient) { }
  getEvironmentDetail(): Observable<any> {
    const url = '../../../assets/json/evironment.details.json';
    return this.http.get(url).pipe(
      tap((userEnabled) => {
        this.userEnabled$.next(userEnabled);
    })
    );
  }
}
