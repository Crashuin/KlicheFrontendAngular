import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';

//Angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidenavComponent,
    NavbarComponent,
    FooterComponent,
    Error404PageComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    SidenavComponent,
    NavbarComponent,
    FooterComponent,
    Error404PageComponent
  ]
})
export class SharedModule { }
