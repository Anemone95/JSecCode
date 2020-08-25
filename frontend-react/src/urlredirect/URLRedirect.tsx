import React from 'react';
import '../App.css';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import * as QueryString from "query-string"

interface Props extends RouteComponentProps{
}

class URLRedirect extends React.Component<Props, any>{
    render()  {
        console.log(this.props.location.search);
        const url:string=QueryString.parse(this.props.location.search).url as string;
        window.location.href = url;
        return <div>Redirecting</div>;
    }
}

// 导出带有路由信息的component，此时router会把路由信息传到component中

export default withRouter(URLRedirect);
