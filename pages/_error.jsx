const React = require('react')
const Nav = require('./Nav')
const NextError = require('next/error').default

function ErrorPage (props) {
  return (
    <div>
      <Nav />
      <h1 style={{ color: 'red' }}>Error!!!</h1>
      <pre>{ JSON.stringify(props, null, 2) }</pre>
    </div>
  )
}
ErrorPage.getInitialProps = function (ctx) {
  // console.log('ErrorPage')
  // console.log(ctx)
  return Promise.resolve(NextError.getInitialProps(ctx))
}

module.exports = ErrorPage
