import React from 'react';
import '../App.css';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import * as QueryString from "query-string"

interface Props extends RouteComponentProps{
}

class ReflectedXSS extends React.Component<Props, any>{
    render()  {
        return <div dangerouslySetInnerHTML={{__html: "You are new at "+QueryString.parse(this.props.location.search).path}}/>;
    }
}

export default withRouter(ReflectedXSS);
