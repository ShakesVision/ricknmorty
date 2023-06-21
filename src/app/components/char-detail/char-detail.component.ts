import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result, RicknMorty } from 'src/app/models/ricknmorty';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrls: ['./char-detail.component.scss'],
})
export class CharDetailComponent {
  id!: number;
  apiEndpoint = 'https://rickandmortyapi.com/api/character';
  char!: Result;
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((param) => (this.id = param['id']));
    let url: string = `${this.apiEndpoint}/${this.id}`;
    this.http.get(url).subscribe((res: any) => {
      console.log(res);
      this.char = res;
    });
  }
}
