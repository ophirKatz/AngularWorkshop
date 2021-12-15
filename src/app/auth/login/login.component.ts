import { AuthService } from './../auth.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = { id: '1', name: '' };

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.auth.saveUser(this.user);
    this.router.navigate(['/']);
  }

}
