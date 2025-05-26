# Movie Explorer App

## Objetivo

Construir una pequeña aplicación web en React que consuma una API y permita explorar una lista de películas. Queremos que trates este mini proyecto como si lo fueses a poner en producción.

## Requisitos

El único requisito es el siguiente: de usarse alguna librería para gestión de estado, cosa totalmente opcional, por favor usar `@preact/signals-react`

## Instrucciones

Listado de películas:

- Muestra el título, imagen y resumen de cada show.
- Paginación o scroll infinito (mínimo 20 elementos visibles).

Detalle:

- Al hacer clic en una película, muestra una vista de detalle con más información.

Favoritos:

- El usuario puede marcar películas como favoritas (almacenado en localStorage).

Usa esta API pública de ejemplo `GET https://api.tvmaze.com/shows`.

Incluye un README explicando brevemente qué harías diferente con más tiempo.

## Entrega

Sube tu código a un repo de GitHub. Si es privado trendrás que darnos acceso (usuarios ograu y lonamiaec de github)

## Exercise resolution

To resolve the exercise we use some 3rd party libraries

- [Typescript](https://www.typescriptlang.org)
- [React](https://react.dev)
- [Tackstack router](https://tanstack.com/router/latest)
- [Shadcn](https://ui.shadcn.com)
- [Radix](https://www.radix-ui.com)
- [Tailwind](https://tailwindcss.com)
- [React country flag](https://github.com/lazicnemanja/react-country-flags)
- [Vite](https://vite.dev)
- [Vitest](https://vitest.dev)
- [Playwright](https://playwright.dev/)
- [Prettier]
- [Eslint]

### Clone my exercise repository fork

```shell
git clone git@github.com:javierlopezdeancos/frontend-assignment.git
```

### Run locally

To run the exercise you should have installed [nodejs](https://nodejs.org/en) `v22.x` and [npm package manadgement](https://docs.npmjs.com).

#### Install dependencies

In the directory `frontend-assignment` root

```shell
npm i
```

#### Run development server

```shell
npm run dev
```

#### Execute tests

I choice a set of little example of tests that run with [playwright](https://playwright.dev/). To run this simple example suite you should run:

```shell
npm run test
```

##### Execute unit tests

```shell
npm run test:unit
```

##### Execute end to end tests

> [!WARNING]
> We are only testing a little example feature only to show how setup the environment, the test runner, playwright and so this tooling.

```shell
npm run test:e2e
```

> [!NOTE]
> You can run a reporter with the last tests reports run running the command `npm run reports:e2e`

### Next improvements

- [ ] Add new features
  - [ ] Shows list should have filters ( by favorites ... ), sort ( by date ... ) and search
- [ ] Apply some fixes 
  - [ ] Pagination should set an active class into the current page number
  - [ ] Should be a way to come back from show detail to shows list whitout press browser navigation arrows 
- [ ] Add more end to end coverage test to the most valuable use cases
  - [ ] Test shows pagination feature
  - [ ] Test add to favorite feature
- [ ] Add playwright component testing
- [ ] Promote some repeated structure in `show-component.ts` to their own common component
- [ ] Add skeletons in `shows-component.ts` and `show-component.ts` at loading data time
- [ ] Dockerize the app
