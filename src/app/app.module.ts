import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from 'src/app/counter/counter.module';
import { DbzModule } from 'src/app/dbz/dbz.module';
import { HeroesModule } from 'src/app/heroes/heroes.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, HeroesModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
