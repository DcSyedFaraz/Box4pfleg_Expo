import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const NewsComponent = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerLine}>
                    <Text style={styles.headerNormal}>Hinweise </Text>
                    <Text style={styles.headerBold}>/ News</Text>
                </Text>
            </View>
            {[...Array(3)].map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.newsCard,
                        index === 1 ? styles.highlightedCard : null, // Highlight the middle card
                    ]}
                >
                    <Text style={[styles.date,
                    index === 1 ? styles.highlightedCardLabel : null,]}>30th Nov. 2024</Text>
                    <Text style={[styles.description,
                    index === 1 ? styles.highlightedCardLabel : null,]}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    headerLine: {
        fontSize: 20,
        flexDirection: 'row',
        color: '#224184',
    },
    headerBold: {
        fontWeight: 'bold', // Bold styling for "Hinweise"
        color: '#224184',
    },
    headerNormal: {
        fontWeight: 'normal', // Normal styling for "/ News"
        color: '#224184',
    },
    newsCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    highlightedCard: {
        backgroundColor: '#224184',
    },
    highlightedCardLabel: {
        color: '#fff',
    },
    date: {
        fontSize: 14,
        fontWeight: '600',
        color: '#224184',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
});

export default NewsComponent;
