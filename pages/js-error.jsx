const React = require('react')
const Nav = require('./Nav')

function JsError (props) {
  const { iDontExist } = props
  return (
    <div>
      <Nav />
      <h1>This is a page that has a coding error</h1>
      <p>Trying to see how next handles this type of error</p>
      { iDontExist.neitherDoI }
    </div>
  )
}
module.exports = JsError
