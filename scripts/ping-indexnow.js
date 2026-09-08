import { tools } from '../src/data/tools.js'
import { articles } from '../src/data/articles.js'
import { categories } from '../src/data/categories.js'

const HOST = 'calciverse.in'
const SITE_URL = `https://${HOST}`
const INDEXNOW_KEY = '3a042a25f84f6a8f367ec41ce0b823f6'
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

// Gather URLs to notify search engines
function getUrlsToPing() {
  const customUrl = process.argv[2]
  if (customUrl) {
    const formatted = customUrl.startsWith('http') ? customUrl : `${SITE_URL}${customUrl.startsWith('/') ? '' : '/'}${customUrl}`
    return [formatted]
  }

  const staticPages = [
    '/',
    '/articles',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ]

  const toolPages = tools.filter((t) => t.status === 'live').map((t) => `/tool/${t.slug}`)
  const articlePages = articles.filter((a) => a.status === 'live').map((a) => `/articles/${a.slug}`)
  const categoryPages = categories.map((c) => `/category/${c.slug}`)

  const allPaths = [...new Set([...staticPages, ...categoryPages, ...toolPages, ...articlePages])]
  return allPaths.map((p) => `${SITE_URL}${p === '/' ? '/' : p}`)
}

async function pingIndexNow() {
  const urlList = getUrlsToPing()
  console.log(`Pinging IndexNow with ${urlList.length} URLs for ${HOST}...`)

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList.slice(0, 10000) // Max limit per payload
  }

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    })

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`✅ Successfully submitted ${urlList.length} URLs to IndexNow (Bing, Yandex, Seznam)! Status: ${response.status}`)
    } else {
      const text = await response.text()
      console.error(`⚠️ IndexNow submission returned status ${response.status}: ${text}`)
    }
  } catch (err) {
    console.error(`❌ Failed to ping IndexNow:`, err.message)
  }
}

pingIndexNow()
