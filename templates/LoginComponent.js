import {Component} from "react";
import {TextInput, View, StyleSheet, Button, Text} from "react-native";
import DarkTheme from "./themes/DarkTheme";

export default class LoginComponent extends Component {

    // Store Input State of Login Component.
    state = {
        mailIO: "",
        passwordIO: ""
    }

    // Handle login button press
    handleLogin = () => {
        this.setState({ mailIO: "", passwordIO: "" }); // Reset values
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
                    value={this.state.mailIO}
                    onChangeText={(text) => this.setState({ mailIO: text })}
                />
                <TextInput 
                    style={DarkTheme.input} 
                    placeholder="Password" 
                    secureTextEntry={true}
                    value={this.state.passwordIO}
                    onChangeText={(text) => this.setState({ passwordIO: text })}
                />
            </View>
            <Button 
                style={DarkTheme.button} 
                title="Login" 
                onPress={this.handleLogin} 
            />
            <View style={DarkTheme.row}>
                <Text>Don't Have An Account?</Text>
                <Text style={DarkTheme.link}>Sign Up</Text>
            </View>
        </View>);
    }

}
