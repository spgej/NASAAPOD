import React from 'react'

const Footer = () => {

const date = new Date();
const year = date.getFullYear();

  return (
    <footer className="footer">
        <p> All information provided by nasa.gov {year}</p>
    </footer>
  )
}

export default Footer;