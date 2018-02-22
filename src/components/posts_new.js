import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {createPost} from '../actions/index.js'


class PostsNew extends React.Component{
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderInputField(field){
    const {meta} = field;
    const {touched, error} = meta;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    //const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

    return(
      <div className={className}>
       <label>{field.lable}</label>
       <input className="form-control" type="text"  {...field.input}/>
       <span className="text-help">{field.meta.touched?field.meta.error:''}</span>
      </div>
    );
  }
  onSubmit(values){
    console.log(values);
    this.props.createPost(values,()=>{
      this.props.history.push("/");
    });
  }

  render(){
    const {handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>This is a new Post</div>
        <Field lable="Title" name="title" component={this.renderInputField} />
        <Field lable="Category" name="categories" component={this.renderInputField} />
        <Field lable="Content" name="content" component={this.renderInputField} />
        <button className="btn btn-primary" type="submit">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
    </form>
    );
  }

}

function validate(values){
  const errors={};

  if(!values.title)
    errors.title = "enter title";

  if(!values.categories)
    errors.categories = "enter catogery";

  if(!values.content)
    errors.content = "enter content";
  return errors;
}

export default reduxForm({
  form:'PostNewForm',
  validate
})(
  connect(null,{ createPost })(PostsNew)
);
