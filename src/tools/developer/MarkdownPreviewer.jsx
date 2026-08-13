import { useState } from 'react'

export default function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState('# Welcome to Calciverse\n\nThis is a live **Markdown** previewer.\n\n- Pure client-side\n- Fast performance\n- Zero latency\n\n```js\nconsole.log("Hello World");\n```')

  // Basic client side markdown parser
  const parseMarkdown = (md) => {
    let html = md
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mt-4 mb-1">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-4 mb-1">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/```([\s\S]*?)```/gim, '<pre class="bg-paper p-3 rounded font-mono text-sm my-2 overflow-x-auto"><code>$1</code></pre>')
      .replace(/`([^`]+)`/gim, '<code class="bg-paper px-1.5 py-0.5 rounded font-mono text-xs">$1</code>')
      .replace(/^\- (.*$)/gim, '<li class="ml-4 list-disc">$1</li>')
      .replace(/\n$/gim, '<br />')

    return html
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <span className="text-sm font-medium text-ink-soft">Markdown Source</span>
        <textarea
          rows={12}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-line bg-paper-raised px-3 py-2.5 font-mono text-sm outline-none focus:border-saffron transition-colors"
        />
      </div>

      <div>
        <span className="text-sm font-medium text-ink-soft">Live HTML Preview</span>
        <div
          dangerouslySetInnerHTML={{ __html: parseMarkdown(markdown) }}
          className="mt-1.5 min-h-[300px] rounded-lg border border-line bg-paper-raised p-4 text-ink text-sm leading-relaxed"
        />
      </div>
    </div>
  )
}
