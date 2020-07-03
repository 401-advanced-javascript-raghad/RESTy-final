import React from 'react';
import {BrowserRouter,Route, NavLink, Router} from 'react-router-dom';
import Header from './components/header/header';
import Form from './components/form/form.js';
import Footer from './components/footer/footer';
import Results from './components/results/results';
import History from './components/history/history';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading:false,
      results:{},
      history:[]
    };
  }

  handelForm = (results)=>{
    this.setState({results});
  }

  setHistory =(method,url,body)=>{

    let obj = {method,url,body};
    let history = [...this.state.history,obj];
    this.setState({
      history:history
    })
    let arrayHistory = JSON.stringify(this.state.history);
    localStorage.setItem('history' , arrayHistory );
  }

  render() {
    return (
     <BrowserRouter>
        <Header />
        <Route exact path='/'>
          <Form handler={this.handelForm} setHistory={this.setHistory}/>
          <Results results={this.state.results} loading={this.state.loading} />
        </Route>
        <Route exact path='/history' component={History}>
        </Route>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;