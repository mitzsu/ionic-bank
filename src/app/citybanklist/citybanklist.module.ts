import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CitybanklistPage } from './citybanklist.page';

const routes: Routes = [
  {
    path: '',
    component: CitybanklistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CitybanklistPage]
})
export class CitybanklistPageModule {}
