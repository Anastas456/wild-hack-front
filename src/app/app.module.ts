import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { CordonsComponent } from './cordons/cordons.component';
import { AboutVolunteersComponent } from './about-volunteers/about-volunteers.component';
import { InfoComponent } from './info/info.component';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    CordonsComponent,
    AboutVolunteersComponent,
    InfoComponent,
    VolunteerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
