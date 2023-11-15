import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-content/pages/main-page/main-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { AcercadeComponent } from './main-content/components/acercade/acercade.component';
import { ProductPageComponent } from './product/pages/product-page/product-page.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [

  {
    path: 'home',
    component: MainPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'acercade',
    component: AcercadeComponent
  },
  {
    path: 'store',
    component: ProductPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'notfound',
    component: Error404PageComponent
  },
  {
    path: '**',
    redirectTo: '/notfound'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
