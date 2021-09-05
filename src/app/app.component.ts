import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'workshop';

  ngOnInit(): void {
    console.log('Component initializing...');
  }

  ngOnDestroy(): void {
    console.log('Destroying component...');
  }
}
