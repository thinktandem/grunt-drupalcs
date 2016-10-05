#!/bin/bash

#
# Small helper script to get our needed deps for phpcs without
# the user having to do anything.
#

# Uncomment to debug
set -e

# Set up some useful vars
DEP_ROOT=`pwd`"/vendor"
BIN_ROOT="$DEP_ROOT/.bin"

# Ensure we have a place to put our things
mkdir -p "$BIN_ROOT"

# Get the phpcs binary and make it executable
curl -fsSL -o "$BIN_ROOT/phpcs" "https://squizlabs.github.io/PHP_CodeSniffer/phpcs.phar" \
  && chmod +x "$BIN_ROOT/phpcs"

# Get drupal coding standards and add them to our sniffer
curl -fsSL "https://ftp.drupal.org/files/projects/coder-8.x-2.x-dev.tar.gz" | tar -xf- -C "$DEP_ROOT" \
  && "$BIN_ROOT/phpcs" --config-set installed_paths "$DEP_ROOT/coder/coder_sniffer"
