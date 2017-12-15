import React,{ Component } from 'react';
import Root from './root';
class Home extends Component{
    constructor(){
        super()
    }
    render(){
        const styles = {
          width:'100%',
          height:'100%'
        };
        return (
            <div style={styles}>
                <Root />
            </div>
        )
    }
}

export default Home;