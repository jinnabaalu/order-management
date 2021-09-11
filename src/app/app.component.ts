import { Component } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';
import { Character, characterAttributesMapping } from './character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mmom';
  characters$: Observable<Character[]> | undefined;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.characters$ = this.googleSheetsDbService.get<Character>('13RWES9XISRSxz_wwUGHH3DPitbFVJJO1mbzj1ayoLkw', "CUSOMERS", characterAttributesMapping);
  }
}
