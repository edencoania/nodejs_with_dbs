#!/bin/bash

docker rm mongo_db mysql_db mongo_express nodejs
docker volume rm composedb_mongo_data composedb_mysql_data
