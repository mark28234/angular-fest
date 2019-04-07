import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PlpComponent } from './component/plp/plp.component';
import { PdpComponent } from './component/pdp/pdp.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  { path: '', component: PlpComponent },
  { path: 'plp', component: PlpComponent },
  { path: 'pdp/:id', component: PdpComponent },
  { path: 'cart', component: CartComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
