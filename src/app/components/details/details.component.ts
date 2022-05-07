import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../../api.service';
import { Ability, Pokemon } from '../../models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  pokemonId!: string;
  pokemon!: Pokemon;
  routeSub!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.pokemonId = params['id']
      this.getPokemonDetails(this.pokemonId);
    });
  }

  async getPokemonDetails(pokemonId: string): Promise<void> {
    const result = await this.apiService.getOne(pokemonId);
    const obj = JSON.parse(JSON.stringify(result));
    this.pokemon = Pokemon.createPokemon(obj.species.name, [ApiService.POKEMON_URL, pokemonId].join(""));
    const abilityArray = obj.abilities;

    abilityArray.forEach((element: { ability: { name: string }; is_hidden: boolean; slot: number }) => {
      const newAbility = new Ability(element.ability.name, element.is_hidden, element.slot);
      this.pokemon.addAbility(newAbility);
    })
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
