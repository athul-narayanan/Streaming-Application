import React from 'react';
import Modal from './../modal';
import history from './../../history'
import { deleteStream,fetchStream } from './../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    renderActions = () =>{
        return (
            <React.Fragment>
                <Link to="/" className="ui button primary">Delete</Link>
                <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui button">Cancel</button>
            </React.Fragment>
        ) 
    } 

    renderContent(){
        if(!this.props.stream){
            return "Are you sure you want to delete this stream?";
        } else{
            return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`;
        }
    }
    render(){
        return (
            <Modal
                 title="Delete Stream"
                 content={this.renderContent()}
                 actions={this.renderActions()}
                 onDismiss = {()=> history.push('/')}
            />    
        )
    }
    
}
const mapPropsToState = (state,ownProps)=>{
    return {stream : state.streams[ownProps.match.params.id]}
}
export default connect(mapPropsToState,{fetchStream,deleteStream})(StreamDelete);