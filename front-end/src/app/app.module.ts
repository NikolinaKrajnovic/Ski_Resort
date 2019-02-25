import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { SkiResortsComponent } from './ski-resorts/ski-resorts.component';
import { SkiResortPanelComponent } from './ski-resorts/ski-resort-panel/ski-resort-panel.component';
import { SkipassComponent } from './ski-resorts/skipass/skipass.component';
import { TracksComponent } from './ski-resorts/tracks/tracks.component';
import { WeatherComponent } from './ski-resorts/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkiResortsComponent,
    SkiResortPanelComponent,
    SkipassComponent,
    TracksComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
