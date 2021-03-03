import React from 'react';
import './App.css';
import BasicLayout from './Layout';

class AnotherButton extends React.Component{
    componentDidMount(){
		console.log("component did mount 2")
	}
	componentDidUpdate(){
		console.log("component did Update 2", this.props.count);
	}
	componentWillUnmount(){
		console.log("component will unmount 2")
	}
	render(){
		return (
			<button onClick={()=>{}}>{this.props.count}</button>
		)
	}	
}

class App extends React.Component{
	state = {
		count: 1
	}
    componentDidMount(){
		console.log("component did mount")
	}
	componentDidUpdate(){
		console.log("component did Update ", this.state.count);
	}
	componentWillUnmount(){
		console.log("component will unmount")
	}
    render(){
      return (
      <div className="App">
        {/* <BasicLayout /> */}
		<button onClick={()=>{
			this.setState({
				count: this.state.count+1,
			});
		}} >Button</button>
		<AnotherButton count={this.state.count} />
      </div>
    );
    }
}

export default App;
