/* global jest */

import initStoryshots from '@storybook/addon-storyshots'

// normally, I would use something like this to get broken DOM-things out of tests
jest.mock('@material/ripple')
jest.mock('rmwc/Base/MDCFoundation.js')
jest.mock('rmwc/Ripple')

initStoryshots()
