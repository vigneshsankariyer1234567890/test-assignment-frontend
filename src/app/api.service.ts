import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public static readonly POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }

  /**
   * Fetch the list of pokemons from API
   * @param offset how many records to skip
   * @param limit how many records to return
   * @returns list of pokemons
   * 
   * @url https://pokeapi.co/docs/v2#resource-listspagination-section
   */
  get(offset = 20, limit = 20) : Promise<object> {
    return lastValueFrom<object>(this.http.get<object>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`));
  }

  /**
   * Fetch a single pokemon from API
   * @param id id or name of the pokemon
   * @returns pokemon
   * 
   * @url https://pokeapi.co/docs/v2#pokemon
   */
  getOne(id: number | string) : Promise<object> {
    return lastValueFrom<object>(this.http.get<object>(`https://pokeapi.co/api/v2/pokemon/${id}`));
  }
}
