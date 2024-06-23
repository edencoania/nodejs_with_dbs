#!/bin/bash

docker pull mongo-express
docker pull mongo
docker build -t edencoania/release:github -f dockerfile .

docker-compose -f composedb/stack.yml up

