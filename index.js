/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';

const Root = (props) => (
  <PaperProvider>
    <App {...props} />
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => Root);
