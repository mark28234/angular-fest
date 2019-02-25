import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  
import { EffectsModule } from '@ngrx/effects';

//effects
import { CategoryEffects } from  './effects/category.effect';
import { ProductEffects } from './effects/product.effect';
import { ProfileEffects } from './effects/profile.effect';

//reducers
import { categoryReducer } from './reducers/category.reducer';
import { productReducer } from './reducers/product.reducer';
import { profileReducer } from './reducers/profile.reducer';

import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';

import { PageComponent } from './component/page/page.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PlpComponent } from './component/plp/plp.component';
import { FacetComponent } from './component/plp/facet/facet.component';
import { ProductlistComponent } from './component/plp/productlist/productlist.component';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent, PageComponent, HeaderComponent, FooterComponent, PlpComponent, FacetComponent, ProductlistComponent],
  imports: [BrowserModule,
     AppRoutingModule,
     HttpClientModule,
     EffectsModule.forRoot([CategoryEffects, ProductEffects, ProfileEffects]),
     StoreModule.forRoot({
      categoryList: categoryReducer,
      product: productReducer,
      profile: profileReducer
    }),
    NgxPaginationModule
    ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
