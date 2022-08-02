import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        },
        deps: [HttpClient],
      },
    }),
  ],
})
export class AdminModule {}

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { SolutionsComponent } from './solutions/solutions.component';
// import { FooterComponent } from './footer/footer.component';
// import { HomeComponent } from './home/home.component';
// import { SigninComponent } from './signin/signin.component';
// import { SignupComponent } from './signup/signup.component';
// import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
// import { NgxCaptchaModule } from 'ngx-captcha'
// import { NgxMaskModule } from 'ngx-mask';
// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     SolutionsComponent,
//     FooterComponent,
//     HomeComponent,
//     SigninComponent,
//     SignupComponent,
//     ForgotpasswordComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     ReactiveFormsModule,
//     NgxCaptchaModule,
//     NgxMaskModule.forRoot(),
//     TranslateModule.forRoot(
//       {
//       loader: {
//         provide: TranslateLoader,
//         useFactory: (http:HttpClient) => {return new TranslateHttpLoader(http,'./assets/i18n/', '.json');},
//         deps:[HttpClient]
//       }
//     })
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
