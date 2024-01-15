import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { RulesComponent } from './components/rules/rules.component';
import { ResultComponent } from './components/result/result.component';
import { MotusPageComponent } from './pages/motus-page/motus-page.component';
import { FormsModule } from '@angular/forms';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { KeyComponent } from './components/key/key.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { BlueBoardComponent } from './components/blue-board/blue-board.component';
import { CellBlueBoardComponent } from './components/cell-blue-board/cell-blue-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RulesComponent,
    ResultComponent,
    MotusPageComponent,
    KeyboardComponent,
    KeyComponent,
    ActionButtonComponent,
    BlueBoardComponent,
    CellBlueBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
