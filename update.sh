#!/bin/bash

gulp build-production

git add .
git commit -m "Update"
git push