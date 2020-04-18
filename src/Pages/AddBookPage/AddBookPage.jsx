import React, {Component} from 'react';

class AddBookPage extends Component {
    state = {
        invalidForm: true,
        formData:{
            title:'',
            type:'',
            genre:'',
            author:'',
            // user: this.props.user,
        },
        
    };
    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.formData)
        this.props.handleAddBook(this.state.formData);

    };

    //here title
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
        <h2>Add a Book</h2>
        <div className="addbookform">
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
            className="btn xs btn-dark"
            disabled={this.state.invalidForm}
        >
        Add Book
        </button>
        </form>
        </div>
        </>
    );
    }
}
export default AddBookPage;