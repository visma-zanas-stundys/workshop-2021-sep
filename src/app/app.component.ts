import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user$ = this.userService.user$;
  userIsLoading$ = this.userService.isLoading$;

  constructor(private userService: UserService) {}
}
