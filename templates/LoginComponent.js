import {Component} from "react";
import {TextInput, View, StyleSheet, Button, Text} from "react-native";
import DarkTheme from "./themes/DarkTheme";

export default class LoginComponent extends Component {

    // Store Input State of Login Component.
    stateIO = {
        mailIO: "your@email.com", // Define the fixed value here
        passwordIO: ""
    }

    render() {
        return (<View stlye={DarkTheme.login}>
            <View style={DarkTheme.row}>
                <Text style={DarkTheme.light}>Byte</Text>
                <Text style={DarkTheme.bold}>Voice</Text>
            </View>
            <Text style={DarkTheme.description}>Modern Talking is our Future.</Text>
            <View style={DarkTheme.form}>
                <TextInput 
                    style={DarkTheme.input} 
                    placeholder="Email" 
                    defaultValue={this.stateIO.mailIO} // Use the default value here
                />
                <TextInput 
                    style={DarkTheme.input} 
                    placeholder="Password" 
                    secureTextEntry={true} // This should be used instead of type="password"
                />
            </View>
            <Button style={DarkTheme.button} title="Login"/>
            <View style={DarkTheme.row}>
                <Text>Don't Have An Account?</Text>
                <Text style={DarkTheme.link}>Sign Up</Text>
            </View>
        </View>);
    }

}
