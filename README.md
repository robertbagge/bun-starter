# bun-starter

Starter repo for a bun-based project. Currently use versions of this for a few projects, including a public api, an expo react-native app and a NextJS WebApp.

## Pre-requisites
- [direnv](https://direnv.net/)
- [asdf](https://asdf-vm.com/)

## Tooling
- [asdf](https://asdf-vm.com/) for dependency version management.
- [task](https://taskfile.dev/) for task running.
- [direnv](https://direnv.net/) for managing the environment.

## Setup
1. Clone the repo
2. Run `cp .envrc.example .envrc`
3. Run `./setup.sh`
4. Run `task deps:install`

To check that the setup works, you can run the `task test` and `task start` commands.

## Development
- `task start` - starts the server
- `task start:dev` - starts the server in watch mode
- `task test` - runs the tests
- `task code:checks` - Runs type checking, linting and formatting checks
- `task code:fix` - Runs type checking, linting and formatting checks and fixes any issues it can.
- `task build` - Builds the project
- `task docker:build` - Builds the docker image

For a full list of available tasks, run `task --list`