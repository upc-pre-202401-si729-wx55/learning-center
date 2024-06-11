import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-authentication-section',
  templateUrl: './authentication-section.component.html',
  styleUrl: './authentication-section.component.css'
})
export class AuthenticationSectionComponent {
  currentUsername: string = '';
  isSignedIn: boolean = false;
  constructor(private router: Router, private authenticationService: AuthenticationService)  {
    this.authenticationService.currentUsername.subscribe((username) => {
      this.currentUsername = username;
    });
    this.authenticationService.isSignedIn.subscribe((isSignedIn) => {
      this.isSignedIn = isSignedIn;
    });
  }

  onSignIn() {
    this.router.navigate(['/sign-in']).then();
  }

  onSignUp() {
    this.router.navigate(['/sign-up']).then();
  }

  onSignOut() {
    this.authenticationService.signOut();
  }

}
