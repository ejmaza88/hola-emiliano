### Hola Emiliano!

This is a sandbox project to practice local development using containers and Docker.

#### To begin:

- clone this repo

`cd` into `rogue` and run the following:
- `echo 'PUBLIC_HOST="localhost"' > .env && cd ..`
- `make django-local-settings`
- `make django-server`

Using another shell, `cd` into the repo and run:
- `make npm-watch`


#### To view the app:
`http://localhost:8000`

