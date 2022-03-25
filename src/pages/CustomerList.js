import React from "react";
import axios from 'axios';
import DataTable from 'react-data-table-component';


class CustomerList extends React.Component{
    state = {
        customers: [],
        columns: [
            {
                name: '#',
                selector: row => row.id,
                sortable: true,
            },
            {
                name: 'Name',
                selector: row => row.name,
                sortable: true,
            },
            {
                name: 'Email',
                selector: row => row.email,
                sortable: true,
            },
            {
                name: 'Phone',
                selector: row => row.phone,
                sortable: true,
            },
        ],
    }

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }
  
    componentDidMount() {
        const url = `${process.env.REACT_APP_ENDPOINT}contacts.php`;
        axios.get(url).then(response => response.data)
        .then((data) => {
        this.setState({ customers: data })
        console.log('sss', this.state.customers);
        })
        console.log('sea');
    }
  
  
    render(){
        return (
        <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <DataTable
            columns={this.state.columns}
            data={this.state.customers}
        />
        
        </div>
        <div className="col-md-2"></div>
        </div>
        )
    }
  
  }
  
export default CustomerList; 