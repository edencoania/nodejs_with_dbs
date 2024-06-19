#!/bin/bash

docker rm mongo_db mysql_db mongo_express
docker volume prune -f
