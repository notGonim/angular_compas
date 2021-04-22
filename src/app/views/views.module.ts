import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { StasticsComponent } from './stastics/stastics.component';


@NgModule({
  declarations: [
    ViewHomeComponent,
    StasticsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
