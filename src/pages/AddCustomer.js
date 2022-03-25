import React from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";



class AddCustomer extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            
        }
    }
    emailValidation(){
        const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        if(!this.state.email || regex.test(this.state.email) === false){
            this.setState({
                error: "Email is not valid"
            });
            return false;
        }
        return true;
    }

    handleFormSubmit( event ) {
        if(this.emailValidation()){
        event.preventDefault();
            
        
        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('email', this.state.email)
        formData.append('phone', this.state.phone)

        axios({
            method: 'post',
            url:  `${process.env.REACT_APP_ENDPOINT}contacts.php`,
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            if(response.data === true){
                Swal.fire(
                    'Successfully!',
                    'You clicked the button!',
                    'success'
                ).then((result) => {
                    window.location.href = "/list"
                });
            }

        })
        .catch(function (response) {
            //handle error
            console.log(response)
            Swal.fire(
                'Error!',
                'You clicked the button!',
                'error'
            )
        });
        }
    }

    render(){
        return (
            <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
            <form method="post">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input required type="text" className="form-control" id="name" value={this.state.name || ''}
                    onChange={e => this.setState({ name: e.target.value })}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input required type="email" className="form-control" id="email" value={this.state.email || ''}
                    onChange={e => this.setState({ email: e.target.value })}/>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                <PhoneInput 
                country={"tr"} 
                value={this.state.phone}
                onChange={phone => this.setState({ phone })}
                />
                </div>
                    
                    <input type="submit" className="btn btn-success" onClick={e => this.handleFormSubmit(e)} value="Register" />
            </form>
            </div>
            <div className="col-md-2"></div>
            </div>
        );
    }
}

export default AddCustomer;