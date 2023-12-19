import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: UntypedFormGroup;
  loading!: boolean;

  constructor(
    private router: Router,
    private titleService: Title) {
    }

  ngOnInit() {
    this.titleService.setTitle('Report System | Login');
    this.createForm();
}

private createForm() {
    this.loginForm = new UntypedFormGroup({
        email: new UntypedFormControl('', Validators.required),
        password: new UntypedFormControl('', Validators.required)
    });
}

  login() {
    this.loading = true;
  }

  resetPassword() {
    this.router.navigate(['/auth/password-reset-request']);
  }
}
