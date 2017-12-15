import React,{ Component } from 'react';
import { connect } from 'react-redux';
class Childs extends Component{
    constructor(){
        super()
    }
    render(){
        const {cartData,addCartData} = this.props;
        const styles = {
            width:'100%',
            height:'300px',
            backgroundColor:'#ccc',
            ulList:{
                width:500,
                height:100,
                marginLeft:'600px',
                backgroundColor:'green'
            },
            btn:{
                width:'160px',
                height:'40px',
                display:'block',
                marginLeft:'700px',
                backgroundColor:'green'
            }
        };
        return (
            <div style={styles}>
                <ul style={styles.ulList}>
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
                <button style={styles.btn} onClick={() =>addCartData()}>点击事件</button>
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
    //console.log(dispatch);
    return {
        addCartData:()=>dispatch({type:'ADD2'}),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Childs);
