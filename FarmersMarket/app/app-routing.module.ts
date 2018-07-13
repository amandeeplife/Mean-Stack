import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {FarmerComponentComponent} from './farmers-market/farmer-component/farmer-component.component'
import {FarmersDetailsComponent} from './farmers-market/farmers-details.component'
 const My_ROUTES : Routes =  [
  {path: 'home',
  component:FarmerComponentComponent
  },
{path:'farm/:id',
component:FarmersDetailsComponent,
 

}
  ];
  

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(My_ROUTES)
  ],
  declarations: [FarmerComponentComponent]
})
export class AppRoutingModule { }
