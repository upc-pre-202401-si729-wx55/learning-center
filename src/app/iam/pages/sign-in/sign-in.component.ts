import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {SignInRequest} from "../../model/sign-in.request";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent extends BaseFormComponent implements OnInit {
    form!: FormGroup;
    submitted = false;

    constructor(private builder: FormBuilder, private authenticationService: AuthenticationService) {
        super();
    }
    ngOnInit(): void {
        this.form = this.builder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
        });
    }

    onSubmit() {
      if (this.form.invalid) return;
      let username = this.form.value.username;
      let password = this.form.value.password;
      const signInRequest = new SignInRequest(username, password);
      this.authenticationService.signIn(signInRequest);
      this.submitted = true;
    }

}
