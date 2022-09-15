import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

class HeadTail extends Component{
    constructor(props){
      super(props)
      this.state={
        dropdownValue:['Select Value','A','B'],
        value:'',
        result:[],
        lastItem:''
      }
    }
    componentDidMount(){
      this.setState({
        value:this.state.dropdownValue[0],
      })
    }
   handleSelect=(e)=>{
        this.setState({
          value:e
        })
    }
   
    handleSubmit=()=>{
      console.log("clicked",this.state.value)
      if(this.state.value.toLowerCase()==='none')
        alert('select some value')
   }
  render(){
    const {value,result,lastItem}=this.state
  return (
    <div className="App container">
     <div style={{display:'flex',flexDirection:'row',paddingTop:'15px',marginBottom:'10px'}}>
      <DropdownButton
        alignRight
        title={value}
        id="dropdown-menu-align-right"
        onSelect={this.handleSelect}
          >
                <Dropdown.Item eventKey="A">A</Dropdown.Item>
                <Dropdown.Item eventKey="B">B</Dropdown.Item>
        </DropdownButton>
        {/* <h4>You selected {value}</h4> */}
        <Button style={{marginLeft:'50px'}} onClick={()=>{
            console.log("clicked")
            if(this.state.value.toLowerCase()==='select value'){
              alert('Please Select Value from Dropdown')
            }else{
              if(value===lastItem){
                result[result.length-1].push(value)
              }else{
                result.push(new Array(value))
              }
              this.setState({
                lastItem:value,
                value:'Select Value'
              })

              console.log("Result Array-->>",result)
            }
          }
        }>
          Submit
        </Button>
     </div>

     
      <div style={{display:'flex'}}>
      {result.map((items, index) => {
        return (
          <div style={{marginLeft:'10px'}}>
            {items.map((subItems, sIndex) => {
              return (
                <h2> {subItems} </h2>
              )
            })}
          </div>
        );
      })}
      </div>
    </div>
  )};
}


export default HeadTail;
