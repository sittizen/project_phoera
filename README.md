# Project Phoera
Importer, webapi and rich frontend for gamebooks.


## Development Installation

Local development requires [Docker](https://www.docker.com/products/overview)
and [Docker Compose](https://github.com/docker/compose/releases).

From the project root build the containers in "dev mode"

`docker-compose -f dev.yml build`

`docker-compose -f dev.yml up`

You'll find all the services up and running in dev mode:

* [Luigi](https://pypi.python.org/pypi/luigi) dashboard on port [8082](http:://127.0.0.1:8082)
* [Django](https://www.djangoproject.com/) web site and [API](http://www.django-rest-framework.org/) on port [8000](http://127.0.0.1:8000)
* [Angular](https://angular.io/) client on port [3000](http://127.0.0.1:3000) and [Browsersync](https://browsersync.io/) on [3001](http://127.0.0.1:3001)
* [Consul](https://www.consul.io) on port [8500](http://127.0.0.1:8500)
* [Riak](http://basho.com/products/riak-kv/) with explorer on [8098](http://127.0.0.1:8098/admin/)

Thanks to [Registrator](http://gliderlabs.com/registrator) services should be already visibile in Consul [web interface](http://127.0.0.1:8500/ui/).


# Credits

* [cookiecutter-django](https://github.com/pydanny/cookiecutter-django)
* [dockerize](https://github.com/jwilder/dockerize)
