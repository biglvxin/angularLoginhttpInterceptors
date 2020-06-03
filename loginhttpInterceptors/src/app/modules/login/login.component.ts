import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userId: string;
  constructor(
    private router: Router,
    private userService: UserService,
    ) { }

  ngOnInit() {
  }
  submitLogin() {
    console.log(this.userId);
    this.userService.getUserDetails().subscribe((res) => {
      if (res && res.userId) {
        localStorage.setItem('userId', res.userId);
        this.userService.setUserInfo(res);
        this.router.navigate(['plan/plan-home']);
      }

    });
  }
}
