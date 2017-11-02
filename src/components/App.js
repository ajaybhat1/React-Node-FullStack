import React from 'react';

import Header from './Header';
import Wrp from './Wrp';

class App extends React.Component {
    state = {
        pageHeader: 'Naming Contests'
    };

    render() {
        return (
            <Wrp className="App">
                <Header message={this.state.pageHeader}/>
                < div >
                    ...
                </div>
            </Wrp>
        );
    }
}

export default App;