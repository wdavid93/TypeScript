// Exportation par défaut de la classe Pokemon
export default class Pokemon {
    // Déclaration des propriétés de la classe avec leurs types
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;

    // Définition du constructeur de la classe, permettant d'initialiser les propriétés
    constructor(
        // Paramètre id de type number
        id: number,
        // Paramètre hp de type number, avec une valeur par défaut de 100
        hp: number = 100,
        // Paramètre cp de type number, avec une valeur par défaut de 10
        cp: number = 10,
        // Paramètre name de type string, avec une valeur par défaut de '...'
        name: string = '...',
        // Paramètre picture de type string, avec une valeur par défaut d'une URL
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png',
        // Paramètre types de type tableau de strings, avec une valeur par défaut ['Normal']
        types: Array<string> = ['Normal'],
        // Paramètre created de type Date, avec une valeur par défaut de la date actuelle
        created: Date = new Date()
    ) {
        // Initialisation de la propriété id avec le paramètre id
        this.id = id;
        // Initialisation de la propriété hp avec le paramètre hp
        this.hp = hp;
        // Initialisation de la propriété cp avec le paramètre cp
        this.cp = cp;
        // Initialisation de la propriété name avec le paramètre name
        this.name = name;
        // Initialisation de la propriété picture avec le paramètre picture
        this.picture = picture;
        // Initialisation de la propriété types avec le paramètre types
        this.types = types;
        // Initialisation de la propriété created avec le paramètre created
        this.created = created;
    }
}
