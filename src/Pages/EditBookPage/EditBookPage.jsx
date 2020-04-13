import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditBookPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.book
        }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateBook(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, 
        [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render(){
        return (
            <>
            <h1>Edit Book</h1>
            <form ref={this.formRef}
            autoComplete="off"
            onSubmit={this.handleSubmit}
            >
                <div className="form-group">
                    <label>* Book Title</label>
                    <input
                        className="form-control"
                        name="title"
                        value={this.state.formData.title}
                        onChange={this.handleChange}
                        required
                    />
            </div>
            <div className="form-group">
                    <label>* Type (Fiction or Non Fiction)</label>
                        <input
                        className="form-control" 
                        name="type"
                        value={this.state.formData.type}
                        onChange={this.handleChange}
                        required
                        />
                </div>
                <div className="form-group">
                    <label>* Genre </label>
                        <input
                        className="form-control" 
                        name="genre"
                        value={this.state.formData.genre}
                        onChange={this.handleChange}
                        required
                        />
                </div>
                <div className="form-group">
                    <label>* Author</label>
                        <input
                        className="form-control" 
                        name="author"
                        value={this.state.formData.author}
                        onChange={this.handleChange}
                        required
                        />
                </div>
            <button
                type="submit"
                className="btn btn-xs"
                disabled={this.state.invalidForm}
            >
            Save Book
            </button>&nbsp;&nbsp;
            <Link to='/'>CANCEL</Link>
            </form>
            </>
    );
    }
}
export default EditBookPage;

