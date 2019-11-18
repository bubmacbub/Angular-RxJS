import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductBadgeComponent } from './product-badge/product-badge.component';
import { ProductProgressComponent } from './product-progress/product-progress.component';
import { ProductDetailNewComponent } from './product-detail-new/product-detail-new.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    ProductBadgeComponent,
    ProductProgressComponent,
    ProductDetailNewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
