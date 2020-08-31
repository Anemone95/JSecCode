import { createElement } from 'rax';
import * as QueryString from "query-string"
import View from 'rax-view';
import Text from 'rax-text';

function createMarkup(str: string):{__html: string} {
  return {__html: "q="+str};
}

export default function ReflectXSS(props) {
    return (
        <View className="ReflectXSS">
            <div dangerouslySetInnerHTML={createMarkup(QueryString.parse(props.location.search).q as string)} />
        </View>
    );
}
