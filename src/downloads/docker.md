---
title: Docker
icon: docker
category: Download
star: 9
sticky: 9
tag:
  - Docker
  - Docker Hub
article: false
---

[Docker](https://www.docker.com/) is a easy way for deploy a application, this allows reuse hardware resources and SO libraries. 

## Imágenes Oficiales

All official images of [ERPyA](https://erpya.com/) are [here](https://hub.docker.com/u/erpya). We invest many hours and resources in making our infrastructure world class. We are not going the easy way, instead we are going the right way.

You can see all images here:

- [ADempiere ZK UI](https://hub.docker.com/r/erpya/adempiere-zk-ui)
- [ADempiere Vue UI](https://hub.docker.com/r/erpya/adempiere-vue)
- [ADempiere gRPC Server](https://hub.docker.com/r/erpya/adempiere-grpc-server)
- [ADempiere Proxy Server](https://hub.docker.com/r/erpya/proxy-adempiere-api)
- [ADempiere Backend](https://hub.docker.com/r/erpya/backend)
- [ADempiere Middleware](https://hub.docker.com/r/erpya/adempiere-middleware)
- [Microservice for POS](https://hub.docker.com/r/erpya/ms-point-of-sales-rs)

## Local Deploy (Docker Compose)

If you want our products you can try a fast local deploy with [Docker Compose](https://docs.docker.com/compose/).

Download [this](https://github.com/erpya/adempiere-all-services) rerpoand follow these instructions.

### Requirements

Just need install [git](https://git-scm.com/downloads) and [Docker Compose v2.16.0 or later](https://docs.docker.com/compose/install/linux/)

### Clone the repository

```
git clone https://github.com/adempiere/adempiere-all-services
```

### Go to cloned folder

```
cd adempiere-all-services
```
### Make a copy of enviroment file

```
cp env_template .env
```

### Start service

```
docker compose up
```

![Deloyment](https://github.com/erpya/adempiere-all-services/blob/main/docs/ADempiere_All_Services_Vue.gif)