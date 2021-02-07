import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { UsersComponent } from './users/users.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { ReactFormDemoComponent } from './react-form-demo/react-form-demo.component';
import { AuthguardService } from './authguard/authguard.service';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'posts', component: PostComponent,canActivate:[AuthguardService]
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'createPost', component: CreatepostComponent
  },
  {
    path: "reactFormDemo", component: ReactFormDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {



}
