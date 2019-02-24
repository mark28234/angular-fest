import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { categoryReducer } from './reducers/category.reducer';
import { productReducer } from './reducers/product.reducer';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  
import { EffectsModule } from '@ngrx/effects';

import { CategoryEffects } from  './effects/category.effect';
import { ProductEffects } from './effects/product.effect';

import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { PageComponent } from './component/page/page.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PlpComponent } from './component/plp/plp.component';
import { FacetComponent } from './component/plp/facet/facet.component';
import { ProductlistComponent } from './component/plp/productlist/productlist.component';

@NgModule({
  declarations: [AppComponent, PageComponent, HeaderComponent, FooterComponent, PlpComponent, FacetComponent, ProductlistComponent],
  imports: [BrowserModule,
     AppRoutingModule,
     HttpClientModule,
     EffectsModule.forRoot([CategoryEffects, ProductEffects]),
     StoreModule.forRoot({
      categoryList: categoryReducer,
      product: productReducer
    })
    ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
