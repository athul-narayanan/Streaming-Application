import React from 'react';
import { connect } from 'react-redux';
import StreamForm from './streamForm';
import {createStream} from './../../actions'

class StreamCreate extends React.Component{

    onSubmit = (formValues)=>{
        this.props.createStream(formValues);
    }
    render(){
        console.log(this.props);
        return(
            <StreamForm onSubmit={this.onSubmit} />
        )
         
    }
    
}

export default connect(null,{createStream}) (StreamCreate)