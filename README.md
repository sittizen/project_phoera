# Project Phoera
Importer, webapi and rich frontend for gamebooks.


## Development Installation

Local development requires [Docker](https://www.docker.com/products/overview)
and [Docker Compose](https://github.com/docker/compose/releases)

From the project root build the containers in "dev mode"

`docker-compose -f dev.yml build`

`docker-compose -f dev.yml up`

You'll find all the services up and running in dev mode:

* [Luigi](https://pypi.python.org/pypi/luigi) dashboard on port [8082](http:://127.0.0.1:8082)
* [Django](https://www.djangoproject.com/) web site and [API](http://www.django-rest-framework.org/) on port [8000](http://127.0.0.1:8000)
* [Angular](https://angular.io/) client on port [3000](http://127.0.0.1:3000) and [Browsersync](https://browsersync.io/) on [3001](http://127.0.0.1:3001)
