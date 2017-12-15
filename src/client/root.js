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
        //console.log(props);
        // console.log(this.cartData);
        // console.log(cartData);
        // console.log(store.getState());
    }
    render(){
        const { cartData,addCartData } = this.props;
             //console.log(this.props);
        const myStyle = {
            width:'100%',
            textAlign:'center',
            btn:{
                width:'160px',
                height:'40px',
                display:'block',
                marginLeft:'15%'
            },
            ulList:{
                width:'80%',
                height:'100px',
                backgroundColor:'#fff',
                li:{
                    marginTop:'20px',
                    border:'1px solid #ccc',
                    width:'120px',
                    height:'49px',
                    lineHeight:'49px',
                    listStyle:'none',
                    float:'left'
                }
            }
        };
        return (
            <div style={myStyle}>
                <ul style={myStyle.ulList}>
                    {
                        cartData.map((item, index) => {
                            return (
                                <li style={myStyle.ulList.li} key={index}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
                <button style={myStyle.btn} onClick={() =>addCartData()}>添加数字</button>
                <Child />
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state.cartReducer.cartData);
    //console.log(state.cartReducer);
    return {
        cartData:state.cartReducer.cartData
    };
}
function mapDispatchToProps(dispatch) {
    console.log(dispatch.data);
    return {
        addCartData:()=>dispatch({type:'ADD1'})
    };
}

export default connect(//返回当前组件给store,然后是store的数据更新，
// 再重新调用render，渲染页面，改变页面已有的数据
    mapStateToProps,
    mapDispatchToProps
)(Root);