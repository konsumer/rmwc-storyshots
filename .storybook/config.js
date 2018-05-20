import { configure } from '@storybook/react'

function loadStories () {
  require('../src/index.story.js')
}

configure(loadStories, module)
