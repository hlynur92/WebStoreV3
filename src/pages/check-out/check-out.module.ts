import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckOutPage } from './check-out';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CheckOutPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckOutPage),
    HttpClientModule
  ],
})
export class CheckOutPageModule {}
