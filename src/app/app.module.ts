import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LeftnavComponent } from './leftnav/leftnav.component';

// import {ToolbarModule} from 'primeng/toolbar';
// import {ButtonModule} from 'primeng/button';
// import {SplitButtonModule} from 'primeng/splitbutton';
// import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LeftnavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // ToolbarModule,
    // ButtonModule,
    // SplitButtonModule,
    // CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
