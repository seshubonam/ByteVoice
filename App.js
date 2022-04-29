import * as React from 'react';
import DarkTheme from "./templates/themes/DarkTheme";
import LoginComponent from "./templates/LoginComponent";
import {View} from "react-native";


const App = () => {
    return (<View style={DarkTheme.container}><LoginComponent></LoginComponent></View>);
};

export default App;
