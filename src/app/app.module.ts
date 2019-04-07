import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

//effects
import { CategoryEffects } from './effects/category.effect';
import { ProductEffects } from './effects/product.effect';
import { ProfileEffects } from './effects/profile.effect';
import { CartEffects } from './effects/cart.effect';

//reducers
import { categoryReducer } from './reducers/category.reducer';
import { productReducer } from './reducers/product.reducer';
import { profileReducer } from './reducers/profile.reducer';
import { cartReducer } from './reducers/cart.reducer';

import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';

import { PageComponent } from './component/page/page.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PlpComponent } from './component/plp/plp.component';
import { FacetComponent } from './component/plp/facet/facet.component';
import { ProductlistComponent } from './component/plp/productlist/productlist.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { RatingComponent } from './component/common/rating/rating.component';
import { PdpComponent } from './component/pdp/pdp.component';
import { CartComponent } from './component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    PlpComponent,
    FacetComponent,
    ProductlistComponent,
    RatingComponent,
    PdpComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([
      CategoryEffects,
      ProductEffects,
      ProfileEffects,
      CartEffects
    ]),
    StoreModule.forRoot({
      categoryList: categoryReducer,
      product: productReducer,
      profile: profileReducer,
      cart: cartReducer
    }),
    NgxPaginationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
