import { NgModule } from '@angular/core';
import { CounterComponent } from 'src/app/counter/components/counter.component';

@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent],
})
export class CounterModule {}
