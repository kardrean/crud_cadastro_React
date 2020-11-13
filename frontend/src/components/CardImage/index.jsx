import React,  {Component } from 'react';

class CardImage extends Component{
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:3333/products')
        .then((res) => res.json())
        .then((data)=>{
           this.setState({products:data})
        })
    }

    render(){
       // const {path_image} = this.state
        return(
          
            <div>
            {
              this.state.products.map((item,index)=>{
              return( 
                <div>
             
              <img key={index} src={item.path_image}/>
              </div>
              )
              })
    
            }
            </div>  
        )
    }
}

export default CardImage