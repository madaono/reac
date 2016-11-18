import React from 'react';
export default Class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[1,2,3],
            activeIndex : -1
        };
    }
    activate(index){
        this.setState({activeIndex:index});
    }
    render(){
        const {list,activeIndex} = this.state;
        const lis = list.map(
            (item,index) => {
                const cls = index === activeIndex? 'active':'';
                return(
                    <li
                        key={index}
                        className={cls}
                        onClick=>{()=>this.activate(index)}
                      >
                    </li>
                )
            }
        )
    }
}


/*
* react在子标签中要加注释的话需要用{/* * /}中括号引起来
*
* */