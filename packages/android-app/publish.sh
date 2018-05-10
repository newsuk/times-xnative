#!/usr/bin/env bash
set -e

function publish {
  echo -e '\n'$1 $2 $3
  FILEPATH="$1.tar"
  tar -cf $FILEPATH $3
  curl -T $FILEPATH -u${BINTRAY_USER}:${BINTRAY_PASS} "$BINTRAY_REPO/$1/$2/$FILEPATH?override=1&explode=1&publish=1"
}

echo "Publishing to bintray $BINTRAY_REPO"
ROOT_DIR=$(dirname "$0")

cd $ROOT_DIR/repo
publish "times-xnative" $npm_package_version "uk"
publish "react-native" "0.54.2" "com"
publish "react-native-device-info" "0.13.0" "local-repo/react-native-device-info"
publish "react-native-svg" "5.5.1" "local-repo/react-native-svg"
publish "react-native-linear-gradient" "2.4.0" "local-repo/react-native-linear-gradient"
cd $ROOT_DIR
