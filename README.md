### Hola Emiliano!

This is a sandbox project to practice local development using containers and Docker.

#### To begin:

- Clone this repo
- If running on a M1 mac:
  - `export DOCKER_DEFAULT_PLATFORM=linux/amd64`

`cd` into the repo and run the following:

````bash
cd rogue && echo 'PUBLIC_HOST="localhost"' > .env && cd ..
````
````bash
make django-local-settings
````
````bash
make django-server
````

Using another shell, `cd` into the repo and run:
````bash
make npm-watch
````


#### To view the app:
[http://127.0.0.1:8000](http://127.0.0.1:8000)


