import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  myForm: any;

  constructor(private formbuilder: FormBuilder) {
    this.myForm = this.formbuilder.group({
      nomPrenom: ['', [Validators.required]],
      sujet: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      message: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  get nomPrenom() {
    return this.myForm.get('nomPrenom');
  }
  get sujet() {
    return this.myForm.get('sujet');
  }
  get email() {
    return this.myForm.get('email');
  }

  get message() {
    return this.myForm.get('message');
  }
}
