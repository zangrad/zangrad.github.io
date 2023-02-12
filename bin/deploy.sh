#!/bin/bash

NOW=$(date +"%Y-%m-%d %H:%M")

yarn generate
git add .
git commit -m "Deploy $NOW"
git subtree push --prefix .output/public origin dist
