#!/bin/bash

export REACT_IMAGE_NAME=paulwizviz/react-ui
export REST_IMAGE_NAME=paulwizviz/react-rest
export IMAGE_TAG=dev

COMMAND="$1"

function package() {
    docker build -f ./build/package/dev/react/Dockerfile -t ${REACT_IMAGE_NAME}:${IMAGE_TAG} .
    docker build -f ./build/package/dev/rest/Dockerfile -t ${REST_IMAGE_NAME}:${IMAGE_TAG} .
}

function run() {
    docker-compose -f ./deployments/dev/docker-compose.yaml up -d
}

function stop(){
    docker-compose -f ./deployments/dev/docker-compose.yaml down
}

function clean(){
    docker-compose -f ./deployments/dev/docker-compose.yaml down
    docker rmi -f ${REACT_IMAGE_NAME}:${IMAGE_TAG}
    docker rmi -f ${REST_IMAGE_NAME}:${IMAGE_TAG}
    docker rmi -f $(docker images --filter "dangling=true" -q)
}

case $COMMAND in
    "package")
        package
        ;;
    "run")
        run
        ;;
    "stop")
        stop
        ;;
    "clean")
        clean
        ;;
    *)
        echo "$0 [package | run | stop | clean ]"
        ;;
esac