import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from 'src/app/dbz/pages/main-page.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
