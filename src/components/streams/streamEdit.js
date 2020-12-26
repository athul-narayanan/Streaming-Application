import React from 'react';
import {connect} from 'react-redux';
import { fetchStream ,editStream} from './../../actions'
import StreamFrom from './streamForm'

class StreamEdit extends React.Component{
    render(){
        return(
              <div>
                <h3>Edit Stream</h3>
                <StreamFrom 
                   initialValues={this.props.stream}
                   onSubmit={this.onSubmit} />
              </div>
        )
    }

    componentDidMount(){
      this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues)=>{
        this.props.editStream(this.props.match.params.id,formValues)
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {stream : state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);