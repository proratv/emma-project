import React, { Component } from 'react'


class ModalLogin extends Component {

  componentDidMount() {
    document.getElementById("buttonModalLogin").click();
  }

  render(){
    return (
      <div>
        <div className="modal fade" id="ModalLogin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <button class="invisible" id="buttonModalLogin" data-toggle="modal" data-target="#ModalLogin">Login</button>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.toggle}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label className="col-form-label">Username</label>
                    <input type="text" className="form-control" id="username" />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary"
                        data-dismiss="modal" onClick={this.props.toggle}>Cancel</button>
                <button type="button" className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ModalLogin
