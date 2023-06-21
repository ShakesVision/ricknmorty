import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RicknMorty } from 'src/app/models/ricknmorty';
import { Router } from '@angular/router';

@Component({
  selector: 'char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.scss'],
})
export class CharListComponent {
  apiEndpoint = 'https://rickandmortyapi.com/api/character';
  characters!: RicknMorty;
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.httpClient.get(this.apiEndpoint).subscribe((res: any) => {
      console.log(res);
      this.characters = res;
    });
  }
  viewDetail(id: number) {
    this.router.navigateByUrl(`detail/${id}`);
  }
}
