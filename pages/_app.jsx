const React = require('react')
const ErrorPage = require('./_error')
const NextApp = require('next/app').default

class MyApp extends NextApp {
  static async getInitialProps (appContext) {
    return Promise.resolve()
      .then(() => {
        const { Component, ctx } = appContext
        // page component did not define getInitialProps() so, just return empty object
        if (!Component.getInitialProps) { return {} }
        return Promise.resolve(Component.getInitialProps(ctx))
      })
      .then((pageProps) => {
        // return expected shape
        return { pageProps }
      })
      .catch((error) => {
        const { res } = appContext.ctx
        if (res) { res.statusCode = error.statusCode || 500 }
        // normalize error so client side can consume
        // for some reason the .message property disappears on client
        const { statusCode, name, message } = error
        // return the error
        return { error: { statusCode, name, message } }
      })
  }
  render () {
    const { Component, pageProps, error } = this.props
    return (
      <React.Fragment>
        { error
          ? (<ErrorPage {...error} />)
          : (<Component {...pageProps} />)
        }
        <div style={{ background: '#eee', padding: '2rem' }}>
          <h2>_app.jsx props</h2>
          <pre>{ JSON.stringify(this.props, null, 2) }</pre>
        </div>
      </React.Fragment>
    )
  }
}

module.exports = MyApp
