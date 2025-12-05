import Link from 'next/link'
import React from 'react'

const Breadcrum = ({ pageTitle, pagename, content = "" }) => {
  return (
    <div className="breadcrumb-section breadcrumb-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-content">
              <span>{content}</span>
              <h1>{pageTitle}</h1>
              <ul className="breadcrumb-list">
                <li><Link href="/">Home</Link></li>
                <li>{pagename}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrum
