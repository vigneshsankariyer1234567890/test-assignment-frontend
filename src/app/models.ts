export class Pokemon {
    name: string;
    id: string;
    image: string;
    backgroundImage: string;
    abilities: Array<Ability> = [];

    static readonly BASE_IMAGE_URL = "assets/pokemon/";
    static readonly ARTWORK_EXTENSION = "other/official-artwork/"
    static readonly FILE_EXTENSION = ".png";

    private constructor(name: string, id: string, image: string, backgroundImage: string) {
        this.name = name;
        this.id = id;
        this.image = image;
        this.backgroundImage = backgroundImage;
    }

    public static getIdFromPokemonUrl(url: string) : string {
        return url.slice(34).replace("/","");;
    }

    public static createPokemon(name: string, url: string): Pokemon {
        const id = this.getIdFromPokemonUrl(url);
        const image = [Pokemon.BASE_IMAGE_URL, id, Pokemon.FILE_EXTENSION].join("");
        const backgroundImage = [Pokemon.BASE_IMAGE_URL, Pokemon.ARTWORK_EXTENSION, id, Pokemon.FILE_EXTENSION].join("");
        return new Pokemon(name, id, image, backgroundImage);
    }

    public addAbility(ability: Ability): void {
        this.abilities.push(ability);
    }
}

export class Ability {
    name: string;
    isHidden: boolean;
    slot: number;

    constructor(name: string, isHidden: boolean, slot: number) {
        this.name = name;
        this.isHidden = isHidden;
        this.slot = slot;
    }
}