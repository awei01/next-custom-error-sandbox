const React = require('react')
const Nav = require('./Nav')

function ErrorPage (props) {
  console.log (props.message)
  return (
    <div>
      <Nav />
      <h1 style={{ color: 'red' }}>Error!!!</h1>
      <pre>{ JSON.stringify(props, null, 2) }</pre>
    </div>
  )
}
ErrorPage.getInitialProps = function (appContext) {
  console.log('ErrorPage', appContext)
  return {}
}

module.exports = ErrorPage
