# ERP Consultores y Asociados, C.A. ADEmpiere Landing Page

[![Original Author: Mr.Hope](https://img.shields.io/badge/Author-Mr.Hope-blue.svg?style=for-the-badge)](https://mrhope.site)
[![License](https://img.shields.io/github/license/mister-hope/mister-hope.github.io?style=for-the-badge)](https://github.com/Mister-Hope/Mister-Hope.github.io/blob/master/LICENSE)
[Maintainer](https://github.com/yamelsenih)

A community page [VuePress](https://v2.vuepress.vuejs.org/) and [VuePress Theme Hope](https://vuepress-theme-hope.github.io/v2/) forked from [Mister-Hope (Thanks)](https://github.com/Mister-Hope/Mister-Hope.github.io)

The collection includes a number of books covering the main topics of:

- Functional Guide (**Generated automatically from ADempiere**)

# More References

- The official page is in: https://erpya.com
- The official Wiki is in: http://docs.erpya.com
- If you need report a bug see: https://github.com/erpcya/adempiere-landing-page

![Discord](https://img.shields.io/discord/876231677209374750)

## Running the docs
For build it just run `yarn build:vite`, if you want to run all doc just run `yarn dev:vite`, a result after run can be:

```Shell
yarn run v1.22.19
$ vuepress-vite dev src
info Initializing VuePress and preparing data...

  vite v2.9.12 dev server running at:

  > Local:    http://localhost:8080/
  > Network:  http://192.168.5.221:8080/
  > Network:  http://172.17.0.1:8080/
  > Network:  http://172.21.0.1:8080/
  > Network:  http://172.23.0.1:8080/
  > Network:  http://172.22.0.1:8080/
```

## Run docker container:

### Minimal Docker Requirements
To use this Docker image you must have your Docker engine version greater than or equal to 3.0.


### Run with Docker-Compose
Or easy run container using `docker-compose` with follow command:
```shell
docker compose -f build-docker/docker-compose.yaml up
```

### Run container container:

Download docker image:

```shell
docker pull erpya/adempiere-landing-page
```

Run the docker container
```shell
docker run -it -d \
	--name adempiere-landing-page \
	-p 80:80 \
	-e VUE_HOST="http://localhost:9526" \
	-e ZK_HOST="http://localhost:8888" \
	erpya/adempiere-landing-page
```

### Build docker image (for development only):
First compile output files.
``` bash
# Install packages.
pnpm install --frozen-lockfile

# build dist files
pnpm run build:vite
```

Build docker image (for development only):
```shell
docker build -t erpya/adempiere-landing-page:dev -f ./build-docker/development.Dockerfile .
```
