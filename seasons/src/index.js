import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

 class App extends React.Component{

    state = {lat: null, errorMsg: null};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMsg: err.message})
        );
    }

    componentDidUpdate(){
        console.log('My component was updated to screen');
    }

    
    renderContent() {
        if(this.state.errorMsg && !this.state.lat){
            return <div>Error: {this.state.errorMsg}</div>
        }

        if(!this.state.errorMsg && this.state.lat){
            return <SeasonDisplay latitude= {this.state.lat}/>
        }
        return <Spinner text="Please accept location request . . ."/>
    };

    render() {
       return (
           <div className="border red">
               {this.renderContent()}
           </div>
       );
    };
 }
 
 ReactDOM.render(
     <App />,
     document.querySelector('#root')
 );

 if (module.hot) {
     module.hot.accept();
 }