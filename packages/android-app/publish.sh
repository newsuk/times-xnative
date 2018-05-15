#!/usr/bin/env bash
set -e

function publish {
  echo -e '\n'$1 $2 $3
  FILEPATH="$1.tar"
  tar -cf $FILEPATH $3
  curl -T $FILEPATH --header "X-Explode-Archive: true" -u${BINTRAY_USER}:${BINTRAY_PASS} "$BINTRAY_REPO"
}

echo "Publishing to bintray $BINTRAY_REPO"
ROOT_DIR=$(dirname "$0")

cd $ROOT_DIR/repo
publish "times-xnative" $npm_package_version "uk"
publish "react-native" "0.54.2" "com"
publish "react-native-device-info" "0.13.0" "react-repo/react-native-device-info"
publish "react-native-svg" "5.5.1" "react-repo/react-native-svg"
cd $ROOT_DIR
