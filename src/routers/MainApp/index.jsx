import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainAppContainer from '../../components/MainApp';


class MainApp extends PureComponent {
  render() {
    return (
      <MainAppContainer>
        <Switch>
          <Route path="/1" render={() => <div>1</div>} />
          <Route path="/2" render={() => <div>2</div>} />
          <Route path="/3" render={() => <div>3</div>} />
        </Switch>
      </MainAppContainer>
    );
  }
}

export default MainApp;
