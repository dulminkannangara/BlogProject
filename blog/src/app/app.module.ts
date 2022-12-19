import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DefaultComponent } from './admin/default/default.component';
import { SidebarComponent } from './admin/shard/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CreatePostComponent } from './admin/dashboard/posts/create-post/create-post.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { PostListComponent } from './admin/dashboard/posts/post-list/post-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';

const  uxModules = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatExpansionModule
]

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    SidebarComponent,
    DashboardComponent,
    CreatePostComponent,
    PostListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    uxModules,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
