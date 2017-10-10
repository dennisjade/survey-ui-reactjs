import {Component} from 'react';
import axios from 'axios';

class DataReceiver extends Component {
  constructor (props){
    super(props);
    this.state = {agents: '', error:''};
  }

  getAgentsBySubmittedDate() {
    let url = '/agents/submitted/survey';
    axios.get(url, {
        params: {
          dateStart: '2015-11-24',
          dateEnd: '2015-11-26'
        }
      })
      .then( response => {
        this.setState({agents: response})
      })
      .catch( error => {
        this.setState({error: error})
      });
  }

}


export default DataReceiver;
