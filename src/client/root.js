import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Child from './child';
import store from '../store/index';
class Root extends Component{
    constructor(props){
        super(props);
        // const cartData = store.getState().cartReducer;
        // // //console.log(cartData);
        // this.state = {
        //     cartData:cartData
        // };
        console.log(props);
        // console.log(this.cartData);
        // console.log(cartData);
        // console.log(store.getState());
    }
    render(){
        const {cartData,addCartData} = this.props;
            //console.log(this.props);
        const myStyle = {
            width:'100%',
            height:'300px',
            backgroundColor:'#ccc',
            textAlign:'center',
            btn:{
                width:'160px',
                height:'40px',
                display:'block',
                marginLeft:'700px',
                backgroundColor:'green'
            }
        };
        return (
            <div style={myStyle}>
                <ul>
                    {
                        cartData.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
                <button style={myStyle.btn} onClick={() =>addCartData()}>点击事件</button>
                <Child />
            </div>
        )
    }
}
function mapStateToProps(state) {
    //console.log(state.cartReducer);
    return {
        cartData:state.cartReducer.cartData
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addCartData:()=>dispatch({type:'ADD1'})
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);