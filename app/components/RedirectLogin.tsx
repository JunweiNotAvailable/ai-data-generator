import React, { Fragment } from 'react'

const RedirectLogin = () => {
  return (
    <Fragment>
      <meta httpEquiv="refresh" content={`0; url=/login`} />
    </Fragment>
  )
}

export default RedirectLogin