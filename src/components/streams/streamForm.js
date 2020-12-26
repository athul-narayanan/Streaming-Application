import React from 'react';
import { reduxForm , Field} from 'redux-form';

class StreamForm extends React.Component{
    renderError({error,touched}){
        if(error && touched){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }else return null
        
    }
    renderInput = ({input,label,meta})=>{
        const className = `field {met.error && meta.touched ? 'error' : ''}`
        return(
          <div className={className}>
              <label>{label}</label>
              <input {...input} />
              {this.renderError(meta)}
          </div>
        )
    }

    onSubmit = (formValues)=>{
        this.props.onSubmit(formValues);
    }
    render(){
        console.log(this.props);
        return(
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
              <Field name="title" component={this.renderInput} label="Enter Title"/>
              <Field name="description" component={this.renderInput} label="Enter Description"/>
              <button className="ui button primary">Submit</button>
          </form>
        )
         
    }
    
}

const validate = (formValues)=>{
    const error = {};
    if(!formValues.title){
        error.title = "You must enter a title"
    }

    if(!formValues.description){
        error.description = "You must enter description"
    }

    return error;
}

export default reduxForm({
    form : 'streamCreate',
    validate
}) (StreamForm);
