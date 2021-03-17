import React, {Component} from 'react'
import axios from 'axios'
import DatePicker  from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import bsCustomFileInput from 'bs-custom-file-input';
import '../assets/css/icon-all.css'
import '../App.css'

class TodoSimple extends Component {
  constructor(){
    super()
    this.state = {
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      JoinDate: new Date()
    }
  }


  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
        value = e.target.checked;
      }

    this.setState({
    activeItem: { ...this.state.activeItem, [name]: value}
     });

    console.log(this.state.activeItem)
  };


  handleSubmit = (e, data) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/todos/", this.state.activeItem)
      .then(res => {
        if(res.status === 200 || res.status < 300) {
          alert("Data berhasil diinput")
          this.setState({ activeItem: {
            title: "",
            description: "",
            completed: false }
          })
        }
        console.log(res)
        console.log(res.data)
      })
    }


	render() {
		return (
      <div className="register-sec">
        <div className="container form-regist">
            <div className="row">
                <div className="col-md-8 my-5 mx-auto">
                    <form onSubmit={this.handleSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-row">
  				<div className="form-group col-md-6">
    			<label htmlFor="first_name">Title</label>
                  <input type="text"
                    className="form-control"
                    name="title"
                    value = {this.state.activeItem.title}
                    onChange = {this.handleChange}
                    placeholder="Enter Title" />
  				</div>
                <div className="form-group col-md-6">
                    <label htmlFor="l_name">Description</label>
                    <input type="text"
                    className="form-control"
                    name="description"
                    value = {this.state.activeItem.description}
                    onChange = {this.handleChange}
                    placeholder="Enter Description" />
  				</div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
  				<label htmlFor="completed">Is Completed</label>
                <input
                    className="ml-1"
                    type="checkbox"
                    name="completed"
                    checked={this.state.activeItem.completed}
                    onChange={this.handleChange}
                />
  			    </div>
              </div>
                        <button type="submit"
                        className="btn btn-md btn-primary btn-block">
                            Add Item
						</button>
					</form>
				</div>
		    </div>
		</div>
      </div>
		)
	}
}


export default TodoSimple
