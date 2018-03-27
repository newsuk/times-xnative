export interface PlatformAdConfig {
  adUnit: string;
  networkId: string;
  testMode: string;
  sectionId: string;
  sectionName: string;
  articlePositionInSlot: number;
  appVersion: string;
  operatingSystem: string;
  operatingSystemVersion: string;
  cookieEid: string;
  cookieAcsTnl: string;
  cookieIamTgt: string;
  deviceId: string;
  deviceIdHash: string;
  environment: string;
  isLoggedIn: boolean;
  platform: "mobile" | "tablet";
}

export interface ArticleAdConfig {
  id: string;
  headline: string;
}

export interface AdTargetingConfig {
  Timeline: string;
  edition: "tnl-english";
  Shared: "0";
  testmode: string;
  sec_id: string;
  cont_type: "art";
  av: string;
  ft: "";
  kw: string;
  st: "Member";
  aid: string;
  cos: string;
  cov: string;
  cpn: string;
  did: string;
  eid: string;
  env: string;
  log: string;
  pid: string;
  pos: "article_ad";
  vid: string;
  cips: string;
  "did#": string;
  path: string;
  slot: number;
  pform: string;
  share_token: "";
  Timeline_Id: string;
  iam_tgt: string;
  section: string;
  excl_cat: "";
}

export const adTargetConfig = (
  platformAdConfig: PlatformAdConfig,
  articleAdConfig: ArticleAdConfig
): AdTargetingConfig => ({
  networkId: platformAdConfig.adUnit,
  adUnit: platformAdConfig.networkId,
  pageTargeting: {
    Timeline: "0",
    edition: "tnl-english",
    Shared: "0",
    testmode: platformAdConfig.testMode,
    sec_id: platformAdConfig.sectionId,
    cont_type: "art",
    av: platformAdConfig.appVersion,
    ft: "",
    kw: articleAdConfig.headline.toLowerCase().replace(/\s+/g, ","),
    st: "Member",
    aid: articleAdConfig.id,
    cos: platformAdConfig.operatingSystem,
    cov: platformAdConfig.operatingSystemVersion,
    cpn: platformAdConfig.cookieEid,
    did: platformAdConfig.deviceId,
    eid: platformAdConfig.cookieEid,
    env: platformAdConfig.environment,
    log: platformAdConfig.isLoggedIn ? "1" : "0",
    pid: platformAdConfig.cookieEid,
    pos: "article_ad",
    vid: "",
    cips: platformAdConfig.cookieAcsTnl,
    "did#": platformAdConfig.deviceIdHash,
    path: platformAdConfig.sectionName,
    slot: platformAdConfig.articlePositionInSlot,
    pform: platformAdConfig.platform,
    share_token: "",
    Timeline_Id: platformAdConfig.sectionName,
    iam_tgt: platformAdConfig.cookieIamTgt,
    section: platformAdConfig.sectionName,
    excl_cat: ""
  },
  slotTargeting: {},
  bidderSlots: [],
  biddersConfig: {}
});
