#!/usr/bin/env bash

set -euo pipefail

npm config set registry http://localhost:4873/;

# Add npm user so we can use it to publish
scripts/npm-adduser.js;

lerna publish --yes --no-verify-access --no-git-tag-version --no-push;


npm config set registry https://registry.npmjs.org/;
