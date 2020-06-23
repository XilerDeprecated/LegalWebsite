/*
 ©Xiler - Arthurdw
 Xiler is under a CC0-1.0 License (View the license here: https://legal.xiler.net/license)
 By proceeding to this site you agree with our ToS. (View the tos here: https://legal.xiler.net/tos)
*/
import React from 'react';

class TextContent extends React.Component {
    render() {
        return (
            <main id="TextContent">
                {this.props.text}
            </main>
        );
    }
}

export default TextContent;
