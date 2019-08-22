const React = require('react')
const Nav = require('./Nav')
const BasicAuth = require('basic-auth')

function AuthPage (props) {
  return (
    <div>
      <Nav />
      <h1>Auth Page</h1>
      <pre>{ JSON.stringify(props, null, 2) }</pre>
      <FooModule foo='bar' />
    </div>
  )
}
AuthPage.getInitialProps = function (ctx) {
  // gets called on server side ONLY when direct link <a href='/{path}'>
  // gets called on server and client when using <next/link href='/{path}'>
  const { req, res } = ctx
  // req and res are undefined on client
  if (req && res) {
    const credentials = BasicAuth(req)
    console.log('Got basic auth credentials', credentials)
    const { name, pass } = credentials || {}
    if (name !== 'user' || pass !== 'password') {
      console.log('BasicAuth failed')
      res.setHeader('WWW-Authenticate', 'Basic')
      const error = new Error('You need to be authenticated')
      error.name = 'Authorization Error'
      error.statusCode = 401
      throw error
    }
  }
  return { someKey: 'I came from AuthPage.getInitialProps()' }
}

module.exports = AuthPage

function FooModule (props) {
  return (
    <div style={{ background: '#cff', padding: '2rem' }}>
      <h2>Foo Module (just inspecting props to see if they end up in _app.jsx.props.router.components['/auth']])</h2>
      <pre>{ JSON.stringify(props, null, 2) }</pre>
    </div>
  )
}
