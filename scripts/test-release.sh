#!/usr/bin/env bash

set -euo pipefail

npm config set registry http://localhost:4873/;

# Add npm user so we can use it to publish
scripts/npm-adduser.js;

# Delete its corresponding verdaccio storage so that we don't have to change the version in order to publish
rm -rf $HOME/.local/share/verdaccio/storage/@mozilla-frontend-infra/

lerna publish --yes --no-verify-access --no-git-tag-version --no-push;

npm config set registry https://registry.npmjs.org/;
