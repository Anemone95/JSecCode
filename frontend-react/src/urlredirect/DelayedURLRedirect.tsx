import React from 'react';
import '../App.css';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import * as QueryString from "query-string"

interface Props extends RouteComponentProps {
}

class DelayedURLRedirect extends React.Component<Props, any> {
    private redirectURL: string;
    private timer: NodeJS.Timer;

    constructor(props: Props) {
        super(props);
        this.state = {
            seconds: 5,
        };
        this.timer = setInterval(() => {
            this.setState({seconds: this.state.seconds - 1});
        }, 1000);
        this.redirectURL = QueryString.parse(this.props.location.search).url as string;
    }

    componentDidUpdate() {
        if (this.state.seconds <= 0) {
            window.location.href = this.redirectURL;
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const {seconds} = this.state;
        return <div>Redirecting after {seconds} ...</div>;
    }
}

// 导出带有路由信息的component，此时router会把路由信息传到component中

export default withRouter(DelayedURLRedirect);
