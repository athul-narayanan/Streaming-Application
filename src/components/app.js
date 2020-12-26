import React from 'react'
import { Route ,Router ,Switch} from 'react-router-dom';

import StreamCreate from './streams/streamCreate'

import StreamEdit from './streams/streamEdit'

import StreamDelete from './streams/streamDelete'

import StreamShow from './streams/streamShow'

import StreamList from './streams/streamList'
import Header from './../components/header'
import history from './../history'

const App = ()=>{
    return (
    <div className="ui container">
       <Router history={history}>
       <Header />
         <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' component={StreamCreate} />
            <Route path='/streams/edit/:id' component={StreamEdit} />
            <Route path='/streams/delete/:id' component={StreamDelete} />
            <Route path='/streams/:id' component={StreamShow} />
         </Switch>
          
       </Router>
    </div>)
}

export default App;