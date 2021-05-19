import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../app/home/home.component';
import { RouterModule, Routes} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  }
];

@NgModule({
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,

  ]
})
export class HomeModule { }
