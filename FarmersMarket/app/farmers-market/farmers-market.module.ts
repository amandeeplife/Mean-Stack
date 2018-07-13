import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerComponentComponent } from './farmer-component/farmer-component.component';
import {ServiceService} from '../farmers-market/service.service'
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[FarmerComponentComponent],
  providers:[ServiceService],
  declarations: [FarmerComponentComponent]
})
export class FarmersMarketModule { }
