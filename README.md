# Portfolio 2022

## Set up

```sh
docker compose up -d

pnpm install
pnpm prepare
```

In `packages/database` directory

```sh
cp .env.example .env
npx prisma migrate dev
npx prisma migrate deploy
```

Go back to project root directory

```sh
pnpm --filter database db:seed
```

## Development

```sh
pnpm dev
```

## Deployment

```sh
pnpm build
```

## Packages

- database
  - PostgreSQL database
- theme
  - Theming based on Emotion.js
- ui
  - General UI package
- utils
  - General utilities
- eslint-config-custom
  - Basic config for ESLint
- tsconfig
  - Basic config for TypeScript

## Dependencies

- Project management
  - [Turborepo](https://turbo.build/repo): Mono-repo management build system
  - [Docker](https://docker.com): Packaging applications as containers
- React related dependencies
  - [Next.js](https://nextjs.org/): Web framework
  - [Recoil](https://recoiljs.org/): State management
  - [Emotion.js](https://emotion.sh/): CSS-in-JS
  - [Framer Motion](https://www.framer.com/motion/): Animation library
  - [React Parallax Tilt](https://github.com/mkosir/react-parallax-tilt): Tilt hover effect
- Database
  - [Prisma.js](https://www.prisma.io/): Node.js and TypeScript ORM
  - [PostgreSQL](https://www.postgresql.org/): Relational database
- 3D
  - [Three.js](https://threejs.org/): JavaScript 3D library
  - [React Three Fiber](https://github.com/pmndrs/react-three-fiber): React renderer for threejs
  - [drei](https://github.com/pmndrs/drei): React Three Fiber helpers
  - [glslify](https://github.com/glslify/glslify): Module system for GLSL
  - [r3f-perf](https://github.com/utsuboco/r3f-perf): Performance monitor
  - [Leva](https://github.com/pmndrs/leva): GUI for React
- Development
  - [TypeScript](https://www.typescriptlang.org/): Typed JavaScript
  - [Husky](https://github.com/typicode/husky): Git hooks
  - [ESLint](https://eslint.org/): Linter tool
  - [Prettier](https://prettier.io/): Code formatter

## Environment

- [Node.js](https://nodejs.org/en/): JavaScript runtime
- [pnpm](https://pnpm.io/): Package manager
- [asdf](https://github.com/asdf-vm/asdf): Version manager

Version information is in `.tool-versions` file.

## Special Thanks

Great resources for learning:

- [Three.js Journey](https://threejs-journey.com/): Three.js
- [WebGL School](https://webgl.souhonzan.org/?category=tagged&v=school): WebGL
- [AWWWARDS ACADEMY](https://www.awwwards.com/academy/): Web development
- [Meta Frontend Developer](https://www.coursera.org/professional-certificates/meta-front-end-developer): React development
