
## Introduction

Build a simple laravel development environment with docker-compose. Compatible with Windows(WSL2), macOS(M1) and Linux.
## Usage

1. Click [Use this template](https://github.com/ucan-lab/docker-laravel/generate)
2. Git clone & change directory
3. Execute the following command

```bash
$ make create-project # Install the latest Laravel project
$ make install-recommend-packages # Optional
```

http://localhost

## Tips

- Read this [Makefile](https://github.com/ucan-lab/docker-laravel/blob/main/Makefile).
- Read this [Wiki](https://github.com/ucan-lab/docker-laravel/wiki).

## Container structures

```bash
├── app
├── web
└── db
```

### app container

- Base image
  - [php](https://hub.docker.com/_/php):8.1-fpm-bullseye
  - [composer](https://hub.docker.com/_/composer):2.2

### web container

- Base image
  - [nginx](https://hub.docker.com/_/nginx):1.20

### db container

- Base image
  - [mysql/mysql-server](https://hub.docker.com/r/mysql/mysql-server):8.0

### reference
- React.js　公式
https://ja.reactjs.org/

- [簡単]React x LaravelのSPAで作るチュートリアル(todoアプリ)
https://qiita.com/morry_48/items/abd620f051fb4f36dcc2#resourcesviews%E3%81%AE%E4%B8%8B%E3%81%AF%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%A8%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81appbladephp%E3%81%AE%E3%81%BF%E3%81%A8%E3%81%99%E3%82%8B