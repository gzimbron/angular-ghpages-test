import { NgFor, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from 'src/app/heroes/components/hero/hero.component';
import { ListComponent } from 'src/app/heroes/components/list/list.component';

@NgModule({
  imports: [NgFor, NgIf],
  exports: [HeroComponent, ListComponent],
  declarations: [HeroComponent, ListComponent],
})
export class HeroesModule {}
