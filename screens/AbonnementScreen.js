import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'

import {
    TextInput,
    Button,
    Menu,
    Divider,
    Provider,
    Text,
} from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

const AbonnementScreen = () => {
    const [salutation, setSalutation] = useState("Frau");
    const [menuVisible, setMenuVisible] = useState(false);

    const [form, setForm] = useState({
        careService: "",
        title: "",
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        postalCode: "",
        phone: "",
        email: "",
    });

    const handleInputChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleMenuToggle = () => setMenuVisible(!menuVisible);

    return (
        <Provider>
            <ScrollView style={styles.container}>
                <View style={styles.formGroup}>
                    {/* Salutation Dropdown */}
                    <Picker
                        style={styles.dropdown}
                        selectedValue={salutation}
                        onValueChange={(selectedItem) => setSalutation(selectedItem)
                        }>
                        <Picker.Item label="Frau" value="Frau" />
                        <Picker.Item label="Herr" value="Herr" />
                        <Picker.Item label="Divers" value="Divers" />
                    </Picker>
                    {/* <SelectDropdown
                        data={['Frau', 'Herr', 'Divers']}
                        defaultValue={salutation}
                        onSelect={(selectedItem) => setSalutation(selectedItem)}
                        buttonTextAfterSelection={(selectedItem) => selectedItem}
                        rowTextForSelection={(item) => item}
                        buttonStyle={styles.dropdown}
                        buttonTextStyle={styles.dropdownText}
                        dropdownStyle={styles.dropdownMenu}
                    /> */}

                    {/* Form Fields */}
                    <TextInput
                        activeOutlineColor="#2d4e8e"
                        outlineColor="#fff"
                        label="Pflegedienst"
                        value={form.careService}
                        onChangeText={(value) => handleInputChange("careService", value)}
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        activeOutlineColor="#2d4e8e"
                        outlineColor="#fff"
                        label="Titel"
                        value={form.title}
                        onChangeText={(value) => handleInputChange("title", value)}
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        activeOutlineColor="#2d4e8e"
                        outlineColor="#fff"
                        label="Vorname"
                        value={form.firstName}
                        onChangeText={(value) => handleInputChange("firstName", value)}
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        activeOutlineColor="#2d4e8e"
                        outlineColor="#fff"
                        label="Nachname"
                        value={form.lastName}
                        onChangeText={(value) => handleInputChange("lastName", value)}
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        activeOutlineColor="#2d4e8e"
                        outlineColor="#fff"
                        label="Straße"
                        value={form.street}
                        onChangeText={(value) => handleInputChange("street", value)}
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        activeOutlineColor="#2d4e8e"
                        outlineColor="#fff"
                        label="Stadt"
                        value={form.city}
                        onChangeText={(value) => handleInputChange("city", value)}
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        activeOutlineColor="#2d4e8e"
                        outlineColor="#fff"
                        label="PLZ"
                        value={form.postalCode}
                        onChangeText={(value) => handleInputChange("postalCode", value)}
                        mode="outlined"
                        style={styles.input}
                        keyboardType="numeric"
                    />
                    <TextInput
                        activeOutlineColor="#2d4e8e"
                        outlineColor="#fff"
                        label="Tel"
                        value={form.phone}
                        onChangeText={(value) => handleInputChange("phone", value)}
                        mode="outlined"
                        style={styles.input}
                        keyboardType="phone-pad"
                    />
                    <TextInput
                        activeOutlineColor="#2d4e8e"
                        outlineColor="#fff"
                        label="Email"
                        value={form.email}
                        onChangeText={(value) => handleInputChange("email", value)}
                        mode="outlined"
                        style={styles.input}
                        keyboardType="email-address"
                    />

                    {/* Buttons */}
                    <Button
                        buttonColor="#224184"
                        mode="contained"
                        onPress={() => console.log("Update Address")}
                        style={styles.button}
                    >
                        Lieferadresse aktualisieren
                    </Button>

                    <Divider style={styles.divider} />

                    <Text style={styles.heading}>
                        Weitere Optionen:
                    </Text>
                    <Text style={styles.optionsText}>
                        Bitte stellen Sie einen Antrag an uns, um die versicherte Person
                        oder Versicherung dieser Boxpflege zu ändern. Wir melden uns
                        schnellstmöglich bei Ihnen zurück.
                    </Text>

                    <Button
                        buttonColor="#224184"
                        mode="contained"
                        onPress={() => console.log("Change Insured Person")}
                        style={styles.buttonSecondary}
                    >
                        Versicherte Person ändern
                    </Button>
                    <Button
                        buttonColor="#224184"
                        mode="contained"
                        onPress={() => console.log("Change Insurance")}
                        style={[styles.buttonSecondary, styles.marginBottom]}
                    >
                        Versicherung ändern
                    </Button>
                </View>
            </ScrollView>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f7f7f7",
    },
    formGroup: {
        marginBottom: 20,
        // backgroundColor:'red'
    },
    dropdown: {
        marginBottom: 16,
        width: '100%',
        borderRadius: 18,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 16,
        paddingVertical: 8,
        borderRadius: 12,
    },
    buttonSecondary: {
        paddingVertical: 8,
        borderRadius: 18,
        marginTop: 10,
    },
    marginBottom: {
        marginBottom: 130,
    },
    dropdownText: {
        fontSize: 16,
        color: '#333',
    },
    dropdownMenu: {
        backgroundColor: '#redd',
        borderRadius: 8,
        marginTop: 8,
    },
    divider: {
        marginVertical: 20,
    },
    optionsText: {
        marginBottom: 16,
        fontSize: 14,
        color: "#214184",
    },
    heading: {
        // marginBottom: 16,
        fontSize: 18,
        color: "#214184",
        fontWeight: "bold",
    },
});

export default AbonnementScreen;
