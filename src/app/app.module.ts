import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US} from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SwiperModule } from 'angular2-useful-swiper';
import {HttpModule} from "@angular/http";


import { HomeComponent } from './home/home.component';
import { ClassifyComponent } from './classify/classify.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { PersonalComponent } from './personal/personal.component';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { NotfoundComponentComponent } from './notfound-component/notfound-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

registerLocaleData(en); //antd

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassifyComponent,
    ShoppingComponent,
    PersonalComponent,
    FooterbarComponent,
    NotfoundComponentComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
    HttpModule

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
