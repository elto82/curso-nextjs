import React from 'react'

const Bloglayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <>
      <header>
        Header of the Blog
      </header>
      <main>
        <section>
          {children}
        </section>
        <aside>
          <form>
            <input
              type="search"
              name="search"
              id="search"
              placeholder='Search'
            />
            <button type='submit'>Search</button>
          </form>
        </aside>

      </main>
      <footer>
        Footer of the Blog
        <br />
        <small>
          <a href='XXXXXXXXXXXXXXXXXXXXXXXXXX'>Elto</a>
        </small>
        <br />
        <small>
          <a href='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'>Blog</a>
        </small>
        <br />
        <small>
          <a href='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'>Contact</a>
        </small>
        <br />
        <small>
          <a href='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'>We</a>
        </small>
        <br />
        <small>
          <a href='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'>Services</a>
        </small>
        <br />
        <small>
          <a href='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'>Store</a>
        </small>
        <br />
        <small></small>
      </footer>
    </>
  )
}

export default Bloglayout