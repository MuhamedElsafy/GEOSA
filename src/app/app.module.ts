import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoucInfoComponent } from './douc-info/douc-info.component';
import { Home2Component } from './home2/home2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoucInfoComponent,
    Home2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
