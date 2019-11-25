import React from 'react';


//Import Components
import Introducation1 from '../components/IntroComponent'

class IntroScreen extends React.Component{
      static navigationOptions = {
    header : null,
  };
    render(){
    return(
    <Introducation1 navigation = {this.props.navigation} />
    )
}
        }
    
export default IntroScreen;