import React from 'react'

export default function Button(props: any) {
  return (
    <button className={`button ${props.type}`} {...props}>
        {props.children}
    </button>
  )
}
