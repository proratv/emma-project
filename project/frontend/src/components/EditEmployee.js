import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import DatePicker  from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import bsCustomFileInput from 'bs-custom-file-input';
import '../assets/css/icon-all.css'
import '../App.css'

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      idItem: props.location.state.id,
      activeItem: {
        first_name: props.location.state.first_name,
        last_name: props.location.state.last_name,
        email: props.location.state.email,
        join_date: ""
      },
      JoinDate: new Date(props.location.state.join_date),
      Redirect: false
    }
  }


  handleChangeDate = date => {
    const joinDate = date
    const newDate = joinDate.getFullYear() +"-"+ parseInt(joinDate.getMonth()+1) +"-"+ joinDate.getDate()

    this.setState(prevState => ({
      activeItem: { ...prevState.activeItem, join_date: newDate},
      JoinDate: date
    }));

  };


  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
    activeItem: { ...this.state.activeItem, [name]: value}
     });

    console.log(this.state.activeItem)
  };


  handleSubmit = e => {

    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/employee/${this.state.idItem}/`, this.state.activeItem)
      .then(res => {
        console.log(res)
        console.log(res.data)
        if(res.status === 200) {
          this.setState({Redirect: true})
        }
      })
  }

  componentDidMount() {
    const joinDate = this.state.JoinDate
    const newDate = joinDate.getFullYear()+"-"+parseInt(joinDate.getMonth()+1)+"-"+joinDate.getDate()

    this.setState(prevState => ({
      activeItem: { ...prevState.activeItem, join_date: newDate}
    }));

    bsCustomFileInput.init()


  }


	render() {
    if(this.state.Redirect){
      return <Redirect to={{pathname: '/viewemployee/msg'}} />
    }
		return (
      <div className="register-sec">
			<div className="container form-regist">
				<div className="row">
					<div className="col-md-8 my-5 mx-auto">
						<form onSubmit={this.handleSubmit}>
							<h1 className="h3 mb-3 font-weight-normal">Register</h1>
							<div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="join_date">Join Date</label>
                  <br />
                  <div className="input-group">
                    <DatePicker className="form-control custom-box" id="join_date" name="join_date"
                      dateFormat = 'dd/MM/yyyy'
                      selected = {this.state.JoinDate}
                      onChange = {this.handleChangeDate} />
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="picture">Picture</label>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="inputGroupFile01" />
                  <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file...</label>
                </div>
                </div>
							</div>
							<div className="form-group">
								<label htmlFor="emp_id">Employee ID</label>
								<input type="text"
								className="form-control"
								name="emp_id"
								placeholder="Employee ID" disabled />
							</div>
              <div className="form-row">
  							<div className="form-group col-md-6">
    							<label htmlFor="first_name">First Name</label>
                  <input type="text"
  								className="form-control"
  								name="first_name"
                  value={this.state.activeItem.first_name}
                  onChange={this.handleChange}
                  placeholder="Enter First Name" />
  							</div>
                <div className="form-group col-md-6">
  								<label htmlFor="l_name">Last Name</label>
  								<input type="text"
  								className="form-control"
  								name="last_name"
  								placeholder="Enter Last Name"
                  value={this.state.activeItem.last_name}
                  onChange={this.handleChange} />
  							</div>
              </div>
              <div className="form-row">
  							<div className="form-group col-md-6">
  								<label htmlFor="type">Type</label>
                  <select id="inputState" className="form-control">
                    <option>Choose...</option>
                    <option>Type 1</option>
                    <option>Type 2</option>
                    <option>Type 3</option>
                    <option>Type 4</option>
                  </select>
  							</div>
                <div className="form-group col-md-6">
  								<label htmlFor="contract">Contract</label>
                  <br />
                  <DatePicker className="form-control custom-box" id="join_date" name="contract"
                    selected = {this.state.startDate}  />
  							</div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="type">Department</label>
                  <select id="inputState" className="form-control">
                    <option>Choose...</option>
                    <option>Type 1</option>
                    <option>Type 2</option>
                    <option>Type 3</option>
                    <option>Type 4</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
  								<label htmlFor="l_name">Phone 1</label>
  								<input type="text"
  								className="form-control"
  								name="phone_1"
  								placeholder="Enter Phone Number"
  								/>
  							</div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="position">Position</label>
                  <select id="inputState" className="form-control">
                    <option>Choose...</option>
                    <option>Type 1</option>
                    <option>Type 2</option>
                    <option>Type 3</option>
                    <option>Type 4</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
  								<label htmlFor="l_name">Phone 2</label>
  								<input type="text"
  								className="form-control"
  								name="phone_2"
  								placeholder="Enter Phone Number"
  								/>
  							</div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="Address">Address</label>
                  <input type="text"
                  className="form-control"
                  name="address"
                  placeholder="Enter Employee Address"
                  />
                </div>
                <div className="form-group col-md-6">
  								<label htmlFor="pic_contact">PIC Name</label>
  								<input type="text"
  								className="form-control"
  								name="pic_name"
  								placeholder="Enter PIC Name" />
  							</div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="birthdate">Birthdate</label>
                  <br />
                  <DatePicker className="form-control custom-box" id="exampleInputEmail1" name="birthdate"
                    selected = {this.state.startDate} />
                </div>
                <div className="form-group col-md-6">
  								<label htmlFor="pic_contact">PIC Contact</label>
  								<input type="text"
  								className="form-control"
  								name="pic_contact"
  								placeholder="Enter Phone Number" />
  							</div>
              </div>
              <div className="form-row">
  							<div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.activeItem.email}
                  onChange = {this.handleChange} />
  							</div>
                <div className="form-group col-md-6">
                  <label htmlFor="position">PIC Relation</label>
                  <select id="inputState" className="form-control">
                    <option>Choose...</option>
                    <option>Type 1</option>
                    <option>Type 2</option>
                    <option>Type 3</option>
                    <option>Type 4</option>
                  </select>
                </div>
              </div>
							<button type="submit"
							className="btn btn-md btn-primary btn-block">
								Edit
							</button>
						</form>
					</div>
				</div>
			</div>
      </div>
		)
	}
}


export default Register
