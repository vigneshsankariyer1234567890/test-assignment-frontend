# Test Assignment Frontend

## Features
* List of cards with pokemon and their images
* List of abilities in the actual "detail" page

## Task
Application should fetch data from Pokemon API (https://pokeapi.co/docs/v2) and render it:
* Create view for a list of pokemons on main page (site.com/) (done, but working on pagination with infinite scroll)
* Create view for a single pokemon on another page (site.com/{id}) (done, at site.com/details/{id})

## Info
There is already created ApiService (`src/app/api.service.ts`) to make requests to Pokemon API.

It’s **bad** practice to use *any* (https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) or to not use types at all in typescript, so try to make typings for all your code.

UI and design is completely on you, make it whatever you like.
You can take one of UI frameworks, e.g. Bootstrap(https://getbootstrap.com/), or make your custom design.

## Useful Links
Angular CLI - https://angular.io/cli. You can use it generate all kinds of stuff.

Components in Angular - https://angular.io/guide/component-overview

Templates in Angular - https://angular.io/guide/interpolations

Routing in Angular - https://angular.io/guide/router

Typescript interfaces to make nice typings - https://www.typescriptlang.org/docs/handbook/interfaces.html

Documentation for the API:
* https://pokeapi.co/docs/v2#resource-listspagination-section - to get a list
* https://pokeapi.co/docs/v2#pokemon - to get a single

## Commands
Start development server - `npm start` or `ng serve`.

Build project - `npm run build` or `ng build`.
