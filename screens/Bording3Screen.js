import React from 'react';


//Import Components
import Bording3 from '../components/Bording2Component'

class Bording3Screen extends React.Component{
      static navigationOptions = {
    header : null,
  };
    render(){
    return(
    <Bording3  navigation = {this.props.navigation} />
    )
}
        }
    
export default Bording3Screen;