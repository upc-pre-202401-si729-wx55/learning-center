import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {SignUpRequest} from "../../model/sign-up.request";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent extends BaseFormComponent implements OnInit{
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
    const signUpRequest = new SignUpRequest(username, password);
    this.authenticationService.signUp(signUpRequest);
    this.submitted = true;
  }

}
