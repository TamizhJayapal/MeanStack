import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'list',component:ViewComponent},
  {path:'add',component:AddComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
