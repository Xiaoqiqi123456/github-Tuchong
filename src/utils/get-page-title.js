import defaultSettings from '@/settings'

const title = defaultSettings.title || 'xxx系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - xxx系统`
  }
  return `${title}`
}
