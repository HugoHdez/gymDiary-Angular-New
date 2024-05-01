//if a file is declared in app.module.ts, there is no need to import it here
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gymdiary';

  constructor(private router: Router) {}
  isLandingPage(): boolean {
    return this.router.url === '/landingPage';
  }
  isSpecialPage(): boolean {
    const url = this.router.url;
    return url === '/login' || url === '/register' || this.isLandingPage();
  }
}
