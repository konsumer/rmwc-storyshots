import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Fab } from 'rmwc/Fab'

import './index.css'

storiesOf('Ripply Stuff', module)
  .add('Fab', () => <Fab onClick={action('WHOOP!')}>bug_report</Fab>)
