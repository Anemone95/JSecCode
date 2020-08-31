import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import * as QueryString from "query-string"

export default function URLRedirectFrontend(props) {
    window.location.href=QueryString.parse(props.location.search).url as string
    return "Redirecting...";
}
