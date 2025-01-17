import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button, Surface, IconButton, Divider } from "react-native-paper";
import Subscriptions1 from "../assets/SVG/Subscription1";
import Subscriptions2 from "../assets/SVG/Subscription2";


export default function SubscriptionScreen() {
    return (

        <View style={styles.container}>
            {/* Top Section */}
            <View style={styles.dateContainer}>
                {/* First Card */}
                <Surface style={styles.dateCard}>
                    <Text style={styles.cardTitle}>Meine letzte box4pflege:</Text>
                    <View style={styles.iconTextRow}>
                        <Subscriptions2 />
                        <Text style={styles.dateValue}>18.12.2024</Text>
                    </View>
                </Surface>

                {/* Second Card */}
                <Surface style={styles.dateCard}>
                    <Text style={styles.cardTitle}>Meine nächste box4pflege:</Text>
                    <View style={styles.iconTextRow}>
                        <Subscriptions1 />
                        <Text style={styles.dateRange} numberOfLines={0} ellipsizeMode="tail">
                            kommt zwischen {'\n'} dem
                            <Text style={styles.highlightedDate}> 19.01.2025</Text>{'\n'} und dem
                            <Text style={styles.highlightedDate}> 23.01.2025</Text>
                        </Text>
                    </View>
                </Surface>
            </View>

            {/* Change Button */}
            <Button
                mode="contained"
                onPress={() => console.log("Change Box Clicked")}
                style={styles.changeButton}
                buttonColor="#224184"
            >
                Meine box4pflege wechseln
            </Button>
            <Text style={styles.changeNote}>
                Wechsel möglich bis zum 16.01.2025 {"\n"}
                <Text style={styles.subText}>
                    (Jeweils immer bis zu 3 Tage vor dem nächsten Lieferdatum)
                </Text>
            </Text>

            {/* Subscription Summary */}
            <Text style={styles.sectionTitle}>Abonnements Summen</Text>
            <Text style={styles.subText2}>(Vorgemerkte Änderungen)</Text>
            <Divider style={{ marginVertical: 10 }} />

            {/* Subscription Items */}
            <ScrollView>

                <View style={styles.itemsContainer}>
                    <Surface style={styles.itemCard}>
                        <IconButton icon="spray" size={24} />
                        <Text>Desinfektionstücher</Text>
                        <Text style={styles.itemQuantity}>x1</Text>
                    </Surface>
                    <Surface style={styles.itemCard}>
                        <IconButton icon="glove" size={24} />
                        <Text>Einmalhandschuhe - S, Latex</Text>
                        <Text style={styles.itemQuantity}>x2</Text>
                    </Surface>
                    <Surface style={[styles.itemCard]}>
                        <IconButton icon="mask" size={24} />
                        <Text>FFP2 Masken</Text>
                        <Text style={styles.itemQuantity}>x5</Text>
                    </Surface>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f9f9f9",
    },
    dateContainer: {
        flexDirection: "row",
        // justifyContent: "space-between",
        marginBottom: 20,
    },
    dateCard: {
        flex: 1,
        marginHorizontal: 5,
        padding: 7,
        borderRadius: 8,
        borderColor: "#ddd",
        borderWidth: 1,
        backgroundColor: "#fff",
    },
    iconTextRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 10,
    },
    cardTitle: {
        fontSize: 11,
        // marginLeft: 8,
        color: "#000",
        fontWeight: "500",
    },
    dateValue: {
        fontSize: 16,
        color: "#003366",
        fontWeight: "bold",
    },
    dateRange: {
        fontSize: 10,
        color: "#000",
        // textAlign: "left",
    },
    highlightedDate: {
        color: "#003366",
        fontWeight: "bold",
    },
    changeButton: {
        marginVertical: 20,
        paddingVertical: 8,
        borderRadius: 18,
    },
    changeNote: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#224184",
        fontStyle: "italic",
        textAlign: "center",
        marginBottom: 20,
    },
    subText: {
        marginTop: 10,
        fontSize: 13,
        color: "#224184",
    },
    subText2: {
        fontSize: 18,
    },
    sectionTitle: {
        color: "#224184",
        fontSize: 20,
        fontWeight: "bold",
    },
    itemsContainer: {
        marginTop: 10,
        marginBottom: 100,
        padding: 10,
        // borderColor: "red",
        // borderWidth: 1,
    },
    itemCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        elevation: 2,
    },
    itemQuantity: {
        padding: 5,
        borderRadius: 8,
        backgroundColor: "#224184",
        color: "#fff",
        fontWeight: "bold",
    },
});
