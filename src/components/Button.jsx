import React from 'react'
import classnames from 'classnames'

import styles from './Button.sass'

export const Button = ({
  children,
  onClick,
  typeClass
}) => {
  const defaulted = onClick ? e => {
    e.preventDefault()
    onClick()
  } : null

  const classes = classnames('btn', typeClass || 'btn-primary')

  return (
    <button href="#" onClick={defaulted} className={classes}>
      {children}
    </button>
  )
}
