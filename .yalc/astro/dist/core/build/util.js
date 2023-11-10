function getTimeStat(timeStart, timeEnd) {
  const buildTime = timeEnd - timeStart;
  return buildTime < 750 ? `${Math.round(buildTime)}ms` : `${(buildTime / 1e3).toFixed(2)}s`;
}
function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "file":
          return false;
      }
    }
  }
}
function i18nHasFallback(config) {
  if (config.experimental.i18n && config.experimental.i18n.fallback) {
    return Object.keys(config.experimental.i18n.fallback).length > 0;
  }
  return false;
}
export {
  getTimeStat,
  i18nHasFallback,
  shouldAppendForwardSlash
};
