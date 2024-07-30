import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent {

  firstFormGroup = this._formBuilder.group({
    bName: ['AutoSolutions'],
    oName: ['Jayath Perera'],
    contact: ['07748521 / 01122365'],
    email: ['jayathSolution@gmail.com'],
    location:['No6,Lotus Road, Pettah']
  });
  secondFormGroup = this._formBuilder.group({
    brands: ['Toyota'],
    s1: ['Service 1'],
    s2: ['Service 2'],
    s3: ['Service 3'],
    description:['Description'],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

}
