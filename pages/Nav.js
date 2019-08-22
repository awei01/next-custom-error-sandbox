const React = require('react')
const Link = require('next/link').default

module.exports = function () {
  return (
    <div>
      <div>
        <h2>A tags</h2>
        <a href='/'>Home</a>
        {' | '}
        <a href='/auth'>Auth</a>
        {' | '}
        <a href='/random-error'>Random Error</a>
        {' | '}
        <a href='/js-error'>JS Error</a>
        {' | '}
        <a href='/non-existent-url'>404 Error</a>
      </div>
      <div>
        <h2>Next Link components</h2>
        <Link href='/'><a>Home</a></Link>
        {' | '}
        <Link href='/auth'><a>Auth</a></Link>
        {' | '}
        <Link href='/random-error'><a>Random Error</a></Link>
        {' | '}
        <Link href='/js-error'><a>JS Error</a></Link>
        {' | '}
        <Link href='/none-existent-url'><a>404 Error</a></Link>
      </div>
    </div>
  )
}
