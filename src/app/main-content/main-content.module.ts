import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainPageComponent } from './pages/main-page/main-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    MainPageComponent,
    NavbarComponent,
    FooterBarComponent,
    WelcomeComponent,
    AcercadeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule

  ],
  exports: [
    MainPageComponent
  ]
})
export class MainContentModule {
 }
