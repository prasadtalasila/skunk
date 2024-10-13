# About

This is an example of using Dependency Injection in NestJS
using Interfaces.
The example uses `.env` configuration file to select the appropriate
concrete implementation.

The contents of configuration file is:

```env
MUNICIPALITY=aalborg
```

The value can also be `aarhus`.

## Commands

```bash
$ yarn install
# development
$ yarn run start
# watch mode
$ yarn run start:dev
# production mode
$ yarn run start:prod
```

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
