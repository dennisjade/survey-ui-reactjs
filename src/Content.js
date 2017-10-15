import React, {Component} from 'react';
import {AgentBarGraph} from './BarGraph';
import {PreSurveyBarGraph} from './BarGraph2';
import {PostSurveyBarGraph} from './BarGraph3';
import SurveyQuestionsGraph from './SurveyQuestionGraph';
import AgentLocation from './AgentLocation';

class MyContent extends Component {

  render() {
    console.log('Here at Content:',this.props);
    switch (this.props.selectedKey){
      case '1':
        return (
          <AgentBarGraph />
        );
      case '2':
        return (
          <PreSurveyBarGraph />
        );
      case '3':
        return (
          <PostSurveyBarGraph />
        );
      case '4':
        return (
          <SurveyQuestionsGraph />
        );
      case '5':
        return (
          <AgentLocation />
        );
      default:
        return (
          <AgentBarGraph />
        );
    }
  }
}

export default MyContent