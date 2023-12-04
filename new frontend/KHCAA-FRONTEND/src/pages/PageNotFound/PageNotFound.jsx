import React from 'react';
import '../../styles/404/page-notfound.css';

function PageNotFound() {
  return (
    <>
    <div className='main-container'>
      {/* <h1>404 Error Page</h1> */}
      <p className="zoom-area"><b>Oops!</b>  404 Error: The page you are looking for is in another castle. </p>
      <section className="error-container">
        <span className="four"><span className="screen-reader-text">4</span></span>
        <span className="zero"><span className="screen-reader-text">0</span></span>
        <span className="four"><span className="screen-reader-text">4</span></span>
      </section>
      <div className="link-container">
        {/* <a target="_blank" href="#" className="more-link">Visit the original article</a> */}
        
      </div>
      </div>
    </>
  )
}

export default PageNotFound;

