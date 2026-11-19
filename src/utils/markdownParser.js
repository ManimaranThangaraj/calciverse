import React from 'react'

/**
 * Parses an array of raw article content strings into structured semantic nodes.
 * Detects H2 (##), H3 (###), lists (- or * or 1.), standalone formulas (`...`), and paragraphs.
 */
export function parseArticleToNodes(contentArray) {
  const nodes = []

  if (!Array.isArray(contentArray)) return nodes

  contentArray.forEach((block) => {
    if (typeof block !== 'string') return

    const lines = block.split('\n')
    let currentList = null

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()

      if (!line) {
        if (currentList) {
          nodes.push(currentList)
          currentList = null
        }
        continue
      }

      // H2 Heading: ## ...
      if (line.startsWith('## ')) {
        if (currentList) { nodes.push(currentList); currentList = null }
        nodes.push({ type: 'h2', text: line.replace(/^##\s+/, '').trim() })
        continue
      }

      // H3 Heading: ### ...
      if (line.startsWith('### ')) {
        if (currentList) { nodes.push(currentList); currentList = null }
        nodes.push({ type: 'h3', text: line.replace(/^###\s+/, '').trim() })
        continue
      }

      // Unordered List: - ... or * ...
      if (/^[-*]\s+/.test(line)) {
        const itemText = line.replace(/^[-*]\s+/, '').trim()
        if (!currentList || currentList.type !== 'ul') {
          if (currentList) nodes.push(currentList)
          currentList = { type: 'ul', items: [] }
        }
        currentList.items.push(itemText)
        continue
      }

      // Ordered List: 1. ... 2. ...
      if (/^\d+\.\s+/.test(line)) {
        const itemText = line.replace(/^\d+\.\s+/, '').trim()
        if (!currentList || currentList.type !== 'ol') {
          if (currentList) nodes.push(currentList)
          currentList = { type: 'ol', items: [] }
        }
        currentList.items.push(itemText)
        continue
      }

      // Standalone formula block: `formula`
      if (line.startsWith('`') && line.endsWith('`') && line.length > 2) {
        if (currentList) { nodes.push(currentList); currentList = null }
        nodes.push({ type: 'formula', text: line.slice(1, -1).trim() })
        continue
      }

      // Normal paragraph
      if (currentList) {
        nodes.push(currentList)
        currentList = null
      }
      nodes.push({ type: 'p', text: line })
    }

    if (currentList) {
      nodes.push(currentList)
      currentList = null
    }
  })

  return nodes
}

/**
 * Formats inline Markdown into clean HTML string (for static pre-rendering).
 */
export function renderInlineMarkdownHtml(text = '') {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="font-mono bg-paper-raised px-1 py-0.5 rounded text-xs border border-line">$1</code>')
}

/**
 * Converts a string with **bold**, *italic*, and `code` into an array of React elements.
 */
export function renderInlineMarkdownJsx(text = '') {
  if (!text) return null

  const parts = []
  const regex = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }

    const token = match[0]
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        React.createElement(
          'strong',
          { key: `b-${match.index}`, className: 'font-semibold text-ink' },
          token.slice(2, -2)
        )
      )
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        React.createElement(
          'code',
          {
            key: `c-${match.index}`,
            className: 'rounded border border-line bg-paper-raised px-1.5 py-0.5 font-mono text-xs text-ink'
          },
          token.slice(1, -1)
        )
      )
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(
        React.createElement(
          'em',
          { key: `i-${match.index}`, className: 'italic text-ink-soft' },
          token.slice(1, -1)
        )
      )
    }

    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts
}
