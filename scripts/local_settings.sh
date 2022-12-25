#!/bin/bash

cp rogue/rogue/local_settings.py.sample rogue/rogue/local_settings.py
echo "Added local settings for django"

echo 'PUBLIC_HOST="localhost"' > rogue/.env
echo "Added local settings for webpack"