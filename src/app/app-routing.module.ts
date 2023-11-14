import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-content/pages/main-page/main-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { AcercadeComponent } from './main-content/components/acercade/acercade.component';
import { ProductPageComponent } from './product/pages/product-page/product-page.component';
const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
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
  },{
    path: 'store',
    component: ProductPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
