import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userName = '';

  constructor(
    private auth: AuthService
  ) {
    this.auth.user$.subscribe(x => this.userName = x?.name ?? '');
  }

  ngOnInit(): void {
  }

}
