import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Hi There</h1>
      <article>
        Here Ill be posting ideas and practical suggestions.
      </article>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Whats up? The sky</title>
