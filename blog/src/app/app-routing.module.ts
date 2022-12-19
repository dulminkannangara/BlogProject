import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CreatePostComponent } from './admin/dashboard/posts/create-post/create-post.component';
import { DefaultComponent } from './admin/default/default.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',component: LoginComponent
  }
  ,
  {
    path: 'admin',component: DefaultComponent,
    children : [
        {path: '',component: DashboardComponent},
        {path: 'posts',component: CreatePostComponent}

    ]
  },
  {
    path: 'setting',component: CreatePostComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
