### Hola Emiliano!

This is a sandbox project to practice local development using containers and Docker.

#### To begin:

- clone this repo

`cd` into `rogue` and run the following:

````bash
    echo 'PUBLIC_HOST="localhost"' > .env && cd ..
````
````bash
    make django-local-settings
````
````bash
    make django-server
````

Using another shell, `cd` into the repo and run:
- `make npm-watch`


#### To view the app:
[http://localhost:8000](http://localhost:8000)


