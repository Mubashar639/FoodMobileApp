import React from 'react';


//Import Components
import Bording2 from '../components/Bording2Component'

class Bording2Screen extends React.Component{
      static navigationOptions = {
    header : null,
  };
    render(){
    return(
    <Bording2 navigation = {this.props.navigation} />
    )
}
        }
    
export default Bording2Screen;