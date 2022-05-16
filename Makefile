docker-build:
	@docker build -t maza88/django-app .

django-server:
	@docker compose up django-server

django-shell:
	@docker compose run django-shell

django-migrate:
	@docker compose run migrate

django-local-settings:
	@scripts/local_settings.sh

db:
	@docker compose up -d db

redis:
	@docker compose up -d redis

npm-watch:
	@docker compose up npm-watch

