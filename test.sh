#!/usr/bin/env bash

FILE=tests/galen/tests/"$TEST_PREFIX"test.test
DEFAULT_DOMAIN="http://localhost"
VARIABLES=""

if [ "$GALEN_DOMAIN" != "" ] ; then
  VARIABLES="$VARIABLES -Ddomain=$GALEN_DOMAIN"
else
  VARIABLES="$VARIABLES -Ddomain=$DEFAULT_DOMAIN"
fi

if [ "$SAUCE_USERNAME" != "" ] ; then
  VARIABLES="$VARIABLES -DsauceUser=$SAUCE_USERNAME"
fi

if [ "$SAUCE_ACCESS_KEY" != "" ] ; then
  VARIABLES="$VARIABLES -DsauceKey=$SAUCE_ACCESS_KEY"
fi

echo ./node_modules/.bin/galen test "$FILE" --htmlreport galen-reports "$VARIABLES"
