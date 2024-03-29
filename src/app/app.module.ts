import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './core/main-page/main.module';
import { LoginModule } from './core/login-page/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MainModule, HttpClientModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
