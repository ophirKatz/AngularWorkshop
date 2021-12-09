import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { NgModule } from '@angular/core';
import { UserDataService } from './user-data.service';
import { FakeUserDataService } from './user-data.fake.service';

@NgModule({
  declarations: [UserDetailsComponent],
  providers: [
    {
      provide: UserDataService,
      useClass: FakeUserDataService
    }
  ],
  imports: [CommonModule],
  exports: [UserDetailsComponent]
})
export class FacadeModule { }
