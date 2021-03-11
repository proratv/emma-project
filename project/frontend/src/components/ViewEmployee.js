import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css'
import ReactPaginate from 'react-paginate'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


class ViewEmployee extends Component {
  constructor(props){
    super(props)
    this.state = {
      msg: false,
      employee: [],
      inputSearch: '',
      offset: 0,
      perPage: 5,
      pageCount: 0,
      currentPage: 0,

    }
  }

  componentDidMount(){
        if(this.props.match.params.msg){
          alert('Edit Sukses')
          this.setState({msg: true})
        }
        this.getEmployee()
  }

  employeeSearch = e => {
    this.setState({
      inputSearch: e.target.value
    }, () => {
      this.rePageCount()
    })
  }

  getEmployee = () => {
    axios
      .get("http://localhost:8000/api/employee/")
      .then(res => {
          const countData = res.data.length
          const pageData = Math.ceil(countData / this.state.perPage)
          this.setState({pageCount: pageData})
          this.setState({employee: res.data})
        })
      .catch(err => console.log(err))
  }


  editItem = item => {
    console.log(item)
  }


  deleteItem = item => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () =>
            axios
              .delete(`http://localhost:8000/api/employee/${item.id}`)
              .then(res => this.getEmployee())
        },
        {
          label: 'No',
          onClick: () => null
        }
      ]
    });
  }


  renderItems = () => {
    const newItems = this.state.employee

    const filteredItems =
      newItems.filter(emp => {
        return emp.first_name.toLowerCase().includes(this.state.inputSearch.toLowerCase())
      })

    const slice = filteredItems.slice(this.state.offset, this.state.offset + this.state.perPage)

    return slice.map(item => (
      <tr key={item.id}>
        <td scope="row">{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.email}</td>
        <td><button type="button" className="btn btn-primary" onClick={() => this.editItem(item)}>
          <Link to={{ pathname: "/editemployee/"+item.first_name,
                      state: item }} id="btn-edit-emp">Edit</Link>
            </button> </td>
        <td><button type="button" className="btn btn-danger" onClick={() => this.deleteItem(item)}>Delete</button></td>
      </tr>
    ))
  }


  handlePageClick = e => {
    const selectedPage = e.selected
    const offset = selectedPage * this.state.perPage

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.renderItems()
    })
  }

  rePageCount = () => {
    const filteredItems =
      this.state.employee.filter(emp => {
        return emp.first_name.toLowerCase().includes(this.state.inputSearch.toLowerCase())
      })

    const pageData = Math.ceil(filteredItems.length / this.state.perPage)

    if(this.state.pageCount !== pageData) {
        this.setState(prevState => ({
          pageCount: pageData
          })
        )
    }
  }

  render(){
    return(
      <div>
        <div className="search-sec">
        <div className="container">
          <input type="text"
          className="form-control"
          name="search"
          onChange={this.employeeSearch}
          placeholder="Search Employee" />
        </div>
        </div>
        <div className="table-employee">
        <div className="container">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col" width="30%">First</th>
                <th scope="col" width="30%">Last</th>
                <th scope="col" width="25%">Handle</th>
                <th scope="col" width="15%" colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.renderItems()}
            </tbody>
          </table>
          <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
        </div>
        </div>
      </div>
    )
  }
}

export default ViewEmployee
