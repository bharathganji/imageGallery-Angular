import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.initializeUser();
  }
  username = 'default';
  title = 'imagegallery';

  initializeUser = () => {
    let username = localStorage.getItem('username') || this.randomUsername();
    this.username = username;
    localStorage.setItem('username', username);
  };

  randomUsername = () => {
    return `@user${Date.now().toString().substr(-4)}`;
  };
}
