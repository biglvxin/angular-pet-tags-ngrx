import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { CompleteComponent } from './pages/complete/complete.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { petTagReducer } from './models/pet-tag.reducer';
import { TagShapeComponent } from './pages/create/tag-shape/tag-shape.component';
import { FormsModule } from '@angular/forms';
import { TagTextComponent } from './pages/create/tag-text/tag-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    CompleteComponent,
    TagShapeComponent,
    TagTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'complete',
        component: CompleteComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]),
    FormsModule,
    StoreModule.forRoot({ petTag: petTagReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
