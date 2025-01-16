import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput, Button } from 'react-native-paper';

const ContactForm = () => {
    const [formData, setFormData] = React.useState({
        vorname: '',
        nachname: '',
        telefon: '',
        email: '',
        adresse: '',
        nachricht: '',
    });

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    return (
            <View style={styles.container}>
            <Image
                source={require('../assets/bgimage.png')} // Replace with the actual background image URL
                style={styles.backgroundImage}
            />
                <TextInput
                    mode="outlined"
                    outlineStyle={styles.roundedInput}
                    label="Vorname"
                    value={formData.vorname}
                    onChangeText={(text) => handleChange('vorname', text)}
                    style={styles.input}
                    outlineColor="#224184"
                    activeOutlineColor="#224184"
                />
                <TextInput
                    mode="outlined"
                    outlineStyle={styles.roundedInput}
                    label="Nachname"
                    value={formData.nachname}
                    onChangeText={(text) => handleChange('nachname', text)}
                    style={styles.input}
                    outlineColor="#224184"
                    activeOutlineColor="#224184"
                />
                <TextInput
                    mode="outlined"
                    outlineStyle={styles.roundedInput}
                    label="Telefon"
                    value={formData.telefon}
                    onChangeText={(text) => handleChange('telefon', text)}
                    style={styles.input}
                    keyboardType="phone-pad"
                    outlineColor="#224184"
                    activeOutlineColor="#224184"
                />
                <TextInput
                    mode="outlined"
                    outlineStyle={styles.roundedInput}
                    label="E-Mail"
                    value={formData.email}
                    onChangeText={(text) => handleChange('email', text)}
                    style={styles.input}
                    keyboardType="email-address"
                    outlineColor="#224184"
                    activeOutlineColor="#224184"
                />
                <TextInput
                    mode="outlined"
                    outlineStyle={styles.roundedInput}
                    label="Adresse"
                    value={formData.adresse}
                    onChangeText={(text) => handleChange('adresse', text)}
                    style={styles.input}
                    outlineColor="#224184"
                    activeOutlineColor="#224184"
                />
                <TextInput
                    mode="outlined"
                    outlineStyle={styles.roundedInput}
                    label="Nachricht"
                    value={formData.nachricht}
                    onChangeText={(text) => handleChange('nachricht', text)}
                    style={[styles.input, styles.textArea]}
                    multiline
                    numberOfLines={4}
                    outlineColor="#224184"
                    activeOutlineColor="#224184"
                />
                <Button
                    mode="contained"
                    onPress={() => console.log('Submitted:', formData)}
                    style={styles.button}
                    buttonColor="#224184"
                >
                    Kontaktiere mich
                </Button>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingBottom:90,
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
    },
    input: {
        marginBottom: 16,
        borderRadius: 18,
        // borderWidth: 1,
    },
    textArea: {
        height: 100,
    },
    roundedInput: {
        borderRadius: 12, // Make the outlines more rounded
    },
    button: {
        marginHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 18,
    },
    backgroundImage: {
        width: 300,
        height: 300,
        resizeMode: 'cover',
        position: 'absolute',
        bottom: -60,
        right: -80,
    },
});

export default ContactForm;
