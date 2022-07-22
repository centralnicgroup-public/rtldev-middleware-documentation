# centralnic-reseller

This is just a repository covering all our documentation.

Find it accessible [here](https://centralnic-reseller.github.io/centralnic-reseller/).

Status: WIP!

## Testing

Get the docker container up and running by:

`docker compose up`

In case of issues, please

- remove Gemfile.lock and retry
- remove related docker containers (`docker rm <container-id>`) and retry
- remove related docker images (`docker image rm <image-id>`) and retry

You can check for containers by `docker ps -a` and for images by `docker image ls`.
