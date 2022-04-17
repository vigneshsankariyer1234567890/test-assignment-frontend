# Test Assignment Frontend

Just fork the repository to your account and make assignment in it. How to - https://docs.github.com/en/enterprise-cloud@latest/get-started/quickstart/fork-a-repo#forking-a-repository.

## Task
Application should fetch data for pokemons and render it:
* Create view for a list of pokemons on main page (/)
* Create view for a single pokemon on another page (/{id})

## Info
There is already created ApiService (src/app/api.service.ts) to make requests to Pokemon API.

It’s **bad** practice to use *any* (https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) or to not use types at all in typescript, so try to make typings for all your code.

UI and design is completely on you, make it whatever you like.
You can take one of UI frameworks, e.g. Bootstrap(https://getbootstrap.com/), or make you custom design.

## Useful Links
Angular CLI - https://angular.io/cli. You can use it generate all kinds of stuff.

Components in Angular - https://angular.io/guide/component-overview

Routing in Angular - https://angular.io/guide/router

Typescript interfaces to make nice typings - https://www.typescriptlang.org/docs/handbook/interfaces.html

Documentation for the API:
* https://pokeapi.co/docs/v2#resource-listspagination-section - to get a list
* https://pokeapi.co/docs/v2#pokemon - to get a single

## Commands
Start development server - `npm start` or `ng serve`.

Build project - `npm run build` or `ng build`.
