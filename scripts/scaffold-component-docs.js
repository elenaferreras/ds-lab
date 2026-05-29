#!/usr/bin/env node
/**
 * Scaffold docs/components/<Name>.md and a Documentation story import.
 * Usage: node scripts/scaffold-component-docs.js Badge
 */

import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const name = process.argv[2]
if (!name || !/^[A-Z][a-zA-Z0-9]*$/.test(name)) {
  console.error('Usage: node scripts/scaffold-component-docs.js ComponentName')
  process.exit(1)
}

const slug = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
const root = join(process.cwd())
const mdPath = join(root, 'docs/components', `${name}.md`)
const storiesPath = join(root, 'src/components/ui', slug, `${slug}.stories.jsx`)

const template = `---
component: ${name}
status: draft
source: src/components/ui/${slug}/${slug}.jsx
storybook: Components/${name}
figma_page: ${name}
figma_file: https://www.figma.com/design/Oppoy4D4dW42oWPr8Qssqd/DS-Lab-Components
tags: []
documentation:
  demoComponent: ${name}
  sections:
    dangerVariants: false
    compositionPatterns: false
    relatedComponents: false
---

# ${name}

## Overview

<!-- TODO -->

## When to use

<!-- TODO -->

## Variants

<!-- TODO -->

## Props and behavior

<!-- TODO -->

## Do

<!-- TODO -->

## Don't

<!-- TODO -->

## Content guidelines

<!-- TODO -->

## Accessibility

<!-- TODO -->

## Related components

<!-- TODO -->
`

if (existsSync(mdPath)) {
  console.error(`Already exists: ${mdPath}`)
  process.exit(1)
}

writeFileSync(mdPath, template)
console.log(`Created ${mdPath}`)

if (existsSync(storiesPath)) {
  const raw = readFileSync(storiesPath, 'utf8')
  if (raw.includes('createDocumentationStory')) {
    console.log('Documentation story already present in', storiesPath)
  } else {
    const importBlock = `import { createDocumentationStory } from '../../../storybook/createDocumentationStory'
import ${slug}Guidelines from '../../../../docs/components/${name}.md?raw'
`
    const exportLine = `\nexport const Documentation = createDocumentationStory({ guidelines: ${slug}Guidelines })\n`
    const firstImportEnd = raw.indexOf('\n', raw.indexOf('import'))
    const updated =
      raw.slice(0, firstImportEnd + 1) + importBlock + raw.slice(firstImportEnd + 1) + exportLine
    writeFileSync(storiesPath, updated)
    console.log(`Updated ${storiesPath}`)
  }
} else {
  console.log(`Stories file not found (${storiesPath}) — add Documentation story manually.`)
}

console.log('Done. Fill in sections and documentation frontmatter visuals.')
