import './App.css';
import React from 'react';
import axios from 'axios';
import UserCard from './Components/UserCard';
import Followers from './Components/Followers';

class App extends React.Component {
    state = ({
      user: [],
      followers: []
    })

    componentDidMount() {
      axios.get('https://api.github.com/users/mikefgalvin')
      .then((res)=>{
          console.log('user', res.data);
          this.setState({
              user: res.data
          })
      })
      .catch((err)=> {
          console.log(err);
      })
      axios.get('https://api.github.com/users/mikefgalvin/followers')
    .then((res)=>{
        console.log('followers', res.data);
        this.setState({
            followers: res.data
        })
    })
    .catch((err)=> {
        console.log(err);
    })
  }




  render(){
    console.log('rendering', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github Card</h1>
          <UserCard user={this.state.user}/>
          <Followers followers={this.state.followers}/>
        </header>
      </div>
    );
  }
}

export default App;
