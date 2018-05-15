// @flow

import { Platform, NativeModules } from "react-native";

const nativeAdConfig = NativeModules.NativeModuleReactConfig.adConfig;

const APP_IS_ALWAYS_LOGGED_IN = true;

export const platformAdConfig = ({
  sectionId,
  sectionName,
  articlePositionInSlot
}) => ({
  adUnit: nativeAdConfig.adUnit,
  networkId: nativeAdConfig.networkId,
  testMode: nativeAdConfig.testMode,
  sectionId,
  sectionName,
  articlePositionInSlot,
  appVersion: nativeAdConfig.appVersion,
  operatingSystem: Platform.OS,
  operatingSystemVersion: Platform.Version,
  cookieEid: nativeAdConfig.cookieEid,
  cookieAcsTnl: nativeAdConfig.cookieEid.cookieAcsTnl,
  cookieIamTgt: nativeAdConfig.cookieIamTgt,
  deviceId: nativeAdConfig.deviceId,
  deviceIdHash: nativeAdConfig.deviceIdHash,
  environment: nativeAdConfig.environment,
  isLoggedIn: APP_IS_ALWAYS_LOGGED_IN,
  platform: "mobile"
});
