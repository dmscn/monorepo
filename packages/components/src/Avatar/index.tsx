import React from 'react'

interface Props {
  children: any,
}

export default function Avatar({children}: Props): JSX.Element {
  return <div>{children}</div>
}