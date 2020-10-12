#!/bin/bash

export UI_IMAGE=paulwizviz/reatcjs-ui:dev
export SERVER_IMAGE=paulwizviz/reactjs-server:dev

COMMAND="$1"

message="Usage: $0 clean | run | stop"

if [ -z "$COMMAND" ]; then
    echo $message
    exit 1
fi

case $COMMAND in
    "run")
        docker-compose -f ./deployments/docker-compose.yaml up -d
        ;;
    "stop")
        docker-compose -f ./deployments/docker-compose.yaml down
        ;;
    "clean")
        docker-compose -f ./deployments/docker-compose.yaml down
        docker rmi -f ${SERVER_IMAGE}
        docker rmi -f ${UI_IMAGE}
        docker rmi -f $(docker images --filter "dangling=true" -q)
        ;;
    *)
        echo $message
        ;;
esac