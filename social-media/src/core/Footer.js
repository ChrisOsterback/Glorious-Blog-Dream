import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="mt-5">
        <footer className="page-footer font-small fixed-bottom" style={{ backgroundColor: 'rgb(43, 64, 85)' }}>


          <div className="container ">
            <div className="row">
              <div className="col-md-6 offset-3  mb-2 " >
                <div className=" text-center mt-2 ">




                  <a href="https://github.com/ChrisOsterback/Glorious-Blog-Dream" target="_blank" rel="noopener noreferrer" className="git-ic">
                    <i style={{ color: '#4caf50 ' }} className="fa fa-github-alt fa-lg  fa-2x">Github </i>
                  </a>
                </div>
              </div>


            </div>


          </div>

        </footer>
      </div>
    )
  }
}

export default Footer;