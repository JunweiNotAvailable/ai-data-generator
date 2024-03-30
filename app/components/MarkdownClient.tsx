'use client'

import MarkdownEditor from '@uiw/react-markdown-editor'
import React from 'react'

const MarkdownClient = ({ className, source }: { className?: string, source: string }) => {
  return (
    <MarkdownEditor.Markdown className={className || 'markdown-content'} source={source} />
  )
}

export default MarkdownClient