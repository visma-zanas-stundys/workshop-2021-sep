import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$: Observable<string | null>;
  isLoading$: Observable<boolean>;

  private readonly state = {
    isLoading$: new BehaviorSubject<boolean>(false),
    user$: new BehaviorSubject<string | null>(null),
  };

  constructor() {
    this.user$ = this.state.user$.asObservable();
    this.isLoading$ = this.state.isLoading$.asObservable();

    this.checkUser();
  }

  login(username: string) {
    if (username === 'Anonymous') {
      return;
    }

    this.state.user$.next(username);
  }

  private checkUser() {
    this.state.isLoading$.next(true);

    // Using mock timer instead
    timer(2000).subscribe(() => {
      this.state.isLoading$.next(false);
      this.state.user$.next('Visma Employee');
    });
  }
}
