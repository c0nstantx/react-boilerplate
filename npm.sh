#!/usr/bin/env bash
arguments="$*"
docker exec -it react_boilerplate bash -c "cd /home/node/app && npm $arguments"