export class Pokemon {
    name: string;
    id: string;
    image: string;

    static readonly BASE_IMAGE_URL = "assets/pokemon/";
    static readonly FILE_EXTENSION = ".png";

    private constructor(name: string, id: string, image: string) {
        this.name = name;
        this.id = id;
        this.image = image;
    }

    public static getIdFromPokemonUrl(url: string) : string {
        return url.slice(34).replace("/","");;
    }

    public static createPokemon(name: string, url: string): Pokemon {
        const id = this.getIdFromPokemonUrl(url);
        const image = [Pokemon.BASE_IMAGE_URL, id, Pokemon.FILE_EXTENSION].join("");
        return new Pokemon(name, id, image);
    }
}
