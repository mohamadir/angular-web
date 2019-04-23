import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { LoginService } from './services/login.service';
import { BlogListComponent } from './components/blog-list/blog-list.component'
import { AuthGuard } from './auth.guard';
import { MyBlogsComponent } from './components/my-blogs/my-blogs.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    LoginComponent,
    BlogListComponent,
    MyBlogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        canActivate: [AuthGuard],
        component: BlogListComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
