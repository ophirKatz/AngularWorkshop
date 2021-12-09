import { UserDetailsFacadeService } from './user-details.facade';
import { Component, OnInit } from '@angular/core';
import { UserDetails } from './user-details';

@Component({
  selector: 'app-user-details',
  template: `
    <div *ngIf="(details | async) as userDetails">
      <p>Name: {{userDetails.name}}<p>
      <p>Username: {{userDetails.username}}<p>
      <p>Email: {{userDetails.email}}<p>
    </div>
  `
})
export class UserDetailsComponent implements OnInit {

  public details: Promise<UserDetails>;

  constructor(
    private facade: UserDetailsFacadeService
  ) { }

  ngOnInit(): void {
    this.details = this.facade.getUserDetails();
  }
}
