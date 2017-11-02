import React from 'react';

import Header from './Header';
import Aux from './Aux';

class App extends React.Component {
    state = {
        pageHeader: 'Naming Contests'
    };

    render() {
        return (
            <Aux className="App">
                <Header message={this.state.pageHeader}/>
                < div >
                    ...
                </div>
            </Aux >
        );
    }
}

export default App;