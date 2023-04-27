import { Component } from '@angular/core';
import { Character } from 'src/app/dbz/interfaces/character.interface';
import { DbzService } from 'src/app/dbz/services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.dbzService.deleteCharacter(id);
  }

  addCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
