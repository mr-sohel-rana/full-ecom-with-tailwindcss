import React from 'react'
import Navbar from './Navbar'
import Footer from './Navbar'
import {Helmet} from 'react-helmet'

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content={author} />
         <title>{title}</title>
      </Helmet>

        <Navbar />
        <main style={{minHeight:"80vh"}}>{children}</main>
        <Footer />
    </div>
  )
}
Layout.defaultProps={
  title:"ecommerce",
  description:"mern stack project",
  keywords:"mern,react",
  author:"sohel"
}

export default Layout
