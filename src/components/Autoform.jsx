import React, { forwardRef } from 'react'
import { Autoform as RHFAutoform } from 'react-hook-form-auto'

import styles from '../styles'

export let Autoform = (props, ref) =>
  <RHFAutoform
    styles={styles}
    {...props}
    ref={ref}
  />

Autoform = forwardRef(Autoform)
