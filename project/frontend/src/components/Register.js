import React, {Component} from 'react'
import axios from 'axios'
import DatePicker  from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import bsCustomFileInput from 'bs-custom-file-input';
import '../assets/css/icon-all.css'
import '../App.css'

class Register extends Component {
  constructor(){
    super()
    this.state = {
      activeItem: {
        id: 30,
        type: "",
        department: "",
        position: "",
        phone_1: "",
        phone_2: "",
        address: "",
        pic_name: "",
        pic_contact: "",
        pic_relation: ""
      },
      JoinDate: new Date()
    }
  }




  handleChangeDate = (date, name) => {
    const joinDate = date
    const newDate = joinDate.getFullYear() +"-"+ parseInt(joinDate.getMonth()+1) +"-"+ joinDate.getDate()

    this.setState(prevState => ({
      activeItem: { ...prevState.activeItem, [name]: newDate},
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


  handleSubmit = (e, data) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/employeedetail/", this.state.activeItem)
      .then(res => {
        if(res.status === 200 || res.status < 300) {
          alert("Data berhasil diinput")
          this.setState({ activeItem: {
            type: "",
            department: "",
            position: "",
            phone_1: "",
            phone_2: "",
            address: "",
            pic_name: "",
            pic_contact: "",
            pic_relation: "" }
          })
        }
        console.log(res)
        console.log(res.data)
      })
    }

  componentDidMount() {
    const joinDate = this.state.JoinDate
    const newDate = joinDate.getFullYear()+"-"+parseInt(joinDate.getMonth()+1)+"-"+joinDate.getDate()

    this.setState(prevState => ({
      activeItem: { ...prevState.activeItem, contract: newDate, birthday: newDate}
    }));

      bsCustomFileInput.init()

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
                  <label htmlFor="join_date">Join Date</label>
                  <br />
                  {/* Join Date Input */}
                  <div className="input-group">
                    <DatePicker className="form-control custom-box" id="join_date" name="join_date"
                      dateFormat = 'dd/MM/yyyy'
                      selected = {this.state.JoinDate} />
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
                    </div>
                  </div>
                </div>
                {/* Picture Profile Input */}
                <div className="form-group col-md-6">
                <label htmlFor="picture">Picture</label>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="inputGroupFile01" />
                  <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file...</label>
                </div>
                </div>
							</div>
              {/* Employee ID */}
							<div className="form-group">
								<label htmlFor="emp_id">Employee ID</label>
								<input type="text"
								className="form-control"
								name="emp_id"
								placeholder="Employee ID" disabled />
							</div>
              <div className="form-row">
                {/* First Name Input */}
  							<div className="form-group col-md-6">
    							<label htmlFor="first_name">First Name</label>
                  <input type="text"
  								className="form-control"
  								name="first_name"
                  placeholder="Enter First Name" />
  							</div>
                {/* Last Name Input */}
                <div className="form-group col-md-6">
  								<label htmlFor="l_name">Last Name</label>
  								<input type="text"
  								className="form-control"
  								name="last_name"
  								placeholder="Enter Last Name" />
  							</div>
              </div>
              <div className="form-row">
  							{/* Type Input */}
                <div className="form-group col-md-6">
  								<label htmlFor="type">Type</label>
                  <select id="inputState" 
                    className="form-control"
                    name="type"
                    value={this.state.activeItem.type}
                    onChange={this.handleChange}>
                      <option>Choose...</option>
                      <option>Type 1</option>
                      <option>Type 2</option>
                      <option>Type 3</option>
                      <option>Type 4</option>
                  </select>
  							</div>
                {/* Contract Date Input */}
                <div className="form-group col-md-6">
  								<label htmlFor="contract">Contract</label>
                  <br />
                  <div className="input-group">
                    <DatePicker className="form-control custom-box" id="contract" name="contract"
                      dateFormat = 'dd/MM/yyyy'
                      selected = {this.state.JoinDate}
                      // onChange = {(date)=>this.handleChangeDate(date, "contract")} 
                    />
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
                    </div>
                  </div>
  							</div>
              </div>
              <div className="form-row">
                 {/* Department Input */}
                <div className="form-group col-md-6">
                  <label htmlFor="department">Department</label>
                  <select id="inputState" 
                    className="form-control"
                    name="department"
                    value={this.state.activeItem.department}
                    onChange={this.handleChange}>
                      <option>Choose...</option>
                      <option>Type 1</option>
                      <option>Type 2</option>
                      <option>Type 3</option>
                      <option>Type 4</option>
                  </select>
                </div>
                 {/* Phone 1 Input */}
                <div className="form-group col-md-6">
  								<label htmlFor="phone_1">Phone 1</label>
  								<input type="text"
  								className="form-control"
  								name="phone_1"
                  value={this.state.activeItem.phone_1}
                  onChange={this.handleChange}
  								placeholder="Enter Phone Number"
  								/>
  							</div>
              </div>
              <div className="form-row">
                 {/* Position Input */}
                <div className="form-group col-md-6">
                  <label htmlFor="position">Position</label>
                  <select id="inputState" 
                    className="form-control"
                    name="position"
                    value={this.state.activeItem.position}
                    onChange={this.handleChange}>
                      <option>Choose...</option>
                      <option>Type 1</option>
                      <option>Type 2</option>
                      <option>Type 3</option>
                      <option>Type 4</option>
                  </select>
                </div>
                 {/* Phone 2 Input */}
                <div className="form-group col-md-6">
  								<label htmlFor="phone_2">Phone 2</label>
  								<input type="text"
  								className="form-control"
  								name="phone_2"
                  value={this.state.activeItem.phone_2}
                  onChange={this.handleChange}
  								placeholder="Enter Phone Number"
  								/>
  							</div>
              </div>
              <div className="form-row">
                 {/* Addresss Input */}
                <div className="form-group col-md-6">
                  <label htmlFor="Address">Address</label>
                  <input type="text"
                  className="form-control"
                  name="address"
                  value={this.state.activeItem.address}
                  onChange={this.handleChange}
                  placeholder="Enter Employee Address"
                  />
                </div>
                 {/* PIC Name Input */}
                <div className="form-group col-md-6">
  								<label htmlFor="pic_contact">PIC Name</label>
  								<input type="text"
  								className="form-control"
  								name="pic_name"
                  value={this.state.activeItem.pic_name}
                  onChange={this.handleChange}
  								placeholder="Enter PIC Name" />
  							</div>
              </div>
              <div className="form-row">
                 {/* Birthday Date Input */}
                <div className="form-group col-md-6">
                  <label htmlFor="birthdate">Birthdate</label>
                  <br />
                  <div className="input-group">
                    <DatePicker className="form-control custom-box" id="birthday" name="birthday"
                      dateFormat = 'dd/MM/yyyy'
                      selected = {this.state.JoinDate}
                      // onChange = {this.handleChangeDate} 
                    />
                    <div className="input-group-append">
                      <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
                    </div>
                  </div>
                </div>
                {/* PIC Contact Input */}
                <div className="form-group col-md-6">
  								<label htmlFor="pic_contact">PIC Contact</label>
  								<input type="text"
  								className="form-control"
  								name="pic_contact"
                  value={this.state.activeItem.pic_contact}
                  onChange={this.handleChange}
  								placeholder="Enter Phone Number" />
  							</div>
              </div>
              <div className="form-row">
                {/* Email Input */}
  							<div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input type="email"
                  className="form-control"
                  name="email"
                  value={this.state.activeItem.email}
                  placeholder="Enter Email"
                  onChange = {this.handleChange} />
  							</div>
                {/* PIC Relation Input */}
                <div className="form-group col-md-6">
                  <label htmlFor="pic_relation">PIC Relation</label>
                  <select id="inputState" 
                    className="form-control"
                    name="pic_relation"
                    value={this.state.activeItem.pic_relation}
                    onChange={this.handleChange}>
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
								Add Employee Data
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
