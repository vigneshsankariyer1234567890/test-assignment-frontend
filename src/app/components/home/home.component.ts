import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Pokemon } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pokemons: Array<Pokemon> = [];
  public offset: number = 0;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.searchPokemons(this.offset);
  }
  async searchPokemons(offset?: number): Promise<void> {
    const result = await this.apiService.get(offset);
    const arr = JSON.parse(JSON.stringify(result)).results;

    arr.forEach((element: { name: string; url: string }) => {
      const url = element.url;
      const name = element.name;
      const pokemon = Pokemon.createPokemon(name, url);
      this.pokemons.push(pokemon);
    });

    this.offset+=20;

  }

}
