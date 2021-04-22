import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { StasticsComponent } from './stastics/stastics.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ViewHomeComponent, StasticsComponent],
  imports: [CommonModule, ViewsRoutingModule, SharedModule],
})
export class ViewsModule {}
