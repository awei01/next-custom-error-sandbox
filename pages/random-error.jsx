const React = require('react')
const Nav = require('./Nav')

function SometimesBroken () {
  return (
    <div>
      <Nav />
      <h1>This is the page that randomly breaks</h1>
    </div>
  )
}
SometimesBroken.getInitialProps = function () {
  const random = Math.round(Math.random())
  if (random) {
    const error = new Error('I broke this time')
    error.name = 'Random error'
    error.statusCode = 403
    console.error(error)
    throw error
  }
}
module.exports = SometimesBroken
