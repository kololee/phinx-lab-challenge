# Readme del Proyecto Batalla Pokémon

#### schmitt phinx-lab-challenge

## Introducción

La aplicación es una batalla de Pokémon. Cada uno tiene diferentes stats, como ataque y defensa, por ejemplo, y tenemos que hacerlos batallar entre ellos. El usuario elige su Pokemon, y el sistema elige al azar el contrincante, luego simula la batalla, y muestra quién fue el ganador.

## El Challenge

### Objetivos de Backend

1. Implementar migraciones de DB, debe de popularse una tabla con los datos de los pokemon
2. Implementar endpoint para listar todos los pokemon
3. Implementar endpoint para hacerlos batallar
4. Guardar los resultados de las batallas en una tabla

### Objetivos del Frontend

1. Implementar la UI/UX que liste y seleccione los pokemon
2. Implementar la Card del Pokemon que liste los stats
3. Cuando de Inicio a la batalla, se debe escoger automáticamente y aleatoriamente un contrincante diferente y luego mostrar el resultado
4. Implementar Responsividad básica.
5. Conectar con el Backend

### Algoritmo de Batalla

Para el cálculo de la batalla, se toma en consideración lo siguiente:

- El pokemon con la velocidad más alta hace el primer ataque, si son iguales, el pokemon con el ataque más alto va primero.
- Para calcular el daño, resta la defensa del ataque (ataque-defensa). La diferencia es el daño. Si el ataque es igual o menor que la defensa el daño es 1.
- El daño lo restas del HP.
- Los pokemon pelearán por turnos. Todos los turnos serán calculados in el mismo request. Es por esto por lo que el endpoint debe retornar la data del ganador en la misma llamada.
- El ganador es el que se reste el HP del enemigo a cero. 
- NOTA: como adicional se podría implementar el sistema de tipos, pero no es requerido.

## Implementación

Se respetaron las tecnologías especificadas en el challenge, las cuales fueron:

Backend:
- NestJs
- Typeorm
- Sqlite

Frontend:
- React
- MaterialUI

El framework elegido para crear la app React fue Vite, utilizando el manejador de paquetes pnpm en ambos casos.

### Estructura

En backend, la estructura de archivos elegida fue
```
backend
├── db
│   ├── migrations
│   │   ├── NewMigration.ts
│   │   └── InitData.ts
│   └── data-source.ts
└── src
    ├── pokemon
    │   ├── pokemon.controller.ts
    │   ├── pokemon.entity.ts
    │   ├── pokemon.module.ts
    |   └── pokemon.service.ts
    ├── pokemon-battle
    │   ├── pokemon-battle.controller.ts
    │   ├── pokemon-battle.entity.ts
    │   ├── pokemon-battle.module.ts
    |   └── pokemon-battle.service.ts
    ├── app.module.ts
    ├── app.service.ts
    ├── main.ts
    └── ...
```

Dentro de db está la configuración de TypeOrm para conectar con la base de datos y las entities, además de poder realizar migraciones.

Dentro de src está cada uno de los módulos con su controlador, entity y service juntos. Un cambio aquí podría ser almacenar las entities en otro directorio aparte, tal vez dentro de db/ o en src/entity.

El módulo **pokemon** expone un servicio para listar los pokemon dentro de la base de datos.

El módulo **pokemon-battle** expone un servicio para hacer batallar los pokemon, y guarda en una base de datos la fecha, los contendientes y el resultado de cada pelea.

---

Para frontend

```
src
├── components
│   ├── Header.tsx
│   ├── ...
|   └── WinnerBanner.tsx
├── context
|   └── PokemonContext.ts
├── theme
│   ├── AppTheme.tsx
|   └── pokeTheme.ts
├── types
|   └── Pokemon.ts
├── App.tsx
├── main.tsx
└── ...
```

Dentro de App.tsx se encuentra el contenedor de los distintos componentes de la pantalla principal. Allí dentro también se maneja las llamadas a la API. Esto podría mejorarse separando la capa de servicios en otro directorio, pero por la simpleza del proyecto, se decidió dejarlo así.

Algunos componentes reciben los parámetros por props, y la forma de elegir el pokemon del usuario, se hace con Context. Esto fue para simplificar el paso de la información entre componentes, además de demostrar conocimientos en el uso de Context. Para mejorar la app, otras props podrían manejarse por Context, para ver cuándo la app está haciendo llamada a la API y poner un componente de Loading, por ejemplo.

## Uso

Una vez se encuentre en el directorio del repositorio, dirigirse a backend para instalar las dependencias:

```sh
# Backend
$ cd backend
$ npm install
```

Luego, correr las migraciones para crear las tablas de la base de datos, y llenarla con datos iniciales de distintos Pokemon

```sh
$ npm run migration:run
```

Una vez completado este proceso, levantar el servidor de backend
```sh
$ npm run start:dev
```

Para frontend, simplemente instalar las dependencias y levantar el proyecto
```sh
# Frontend
$ cd frontend
$ npm install
$ npm run dev
```

Debería tener corriendo backend en `http://localhost:3000` y el frontend en `http://localhost:5173/`.

Luego, con algún cliente de APIs puede probar hacer las siguientes llamadas:
- GET /pokemon: retorna la lista de pokemon
- POST /pokemon-battle: enviar dos id de pokemon en body, y simula la batalla entre ellos

La estructura del `body` del post es:
```json
{
  challenger: string;
  contender: string;
}
```

Y el tipo pokemon tiene la siguiente interfaz:
```json
{
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}
```