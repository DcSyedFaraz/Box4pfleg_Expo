import { StyleSheet, View, Text } from 'react-native';
import React, { useEffect, useRef } from 'react';
import * as Animatable from 'react-native-animatable'; // Import Animatable
import Background from './Background';
import Thumb from './Thumb';
import Lines from './Lines';
import { Button } from 'react-native-paper';
import { CommonActions, useNavigation } from '@react-navigation/native';

const Success = () => {
    const navigation = useNavigation();

    const thumbRef = useRef(null);
    const linesRef = useRef(null);
    const textRef = useRef(null);

    const triggerAnimations = () => {
        thumbRef.current?.bounceIn(1500);
        linesRef.current?.fadeInDown(1000);
        textRef.current?.fadeInUp(1200);
        console.log('Animations triggered');

    };

    useEffect(() => {
        const timer = setTimeout(() => {
            // console.log(navigation);
            
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Form' }],
                    routes: [{ name: 'Index' }],
                })
            );
        }, 2000); // Redirect after 2 seconds

        return () => clearTimeout(timer);
    }, [navigation]);

    const handleAnimationEnd = () => {
        console.log('ff');

    };

    return (
        <View style={styles.container}>
            {/* Background fills the entire container */}
            <Background style={styles.background} />

            {/* Animatable Lines */}
            <Animatable.View
                animation="fadeInDown"
                duration={1500}
                ref={linesRef}
                style={styles.linesContainer}
            >
                <Lines style={styles.lines} />
            </Animatable.View>

            {/* Animatable Thumb */}
            <Animatable.View
                animation="bounceIn"
                duration={1500}
                ref={thumbRef}
                style={styles.thumbContainer}
            >
                <Thumb style={styles.thumb} />
            </Animatable.View>

            {/* Animatable Text */}
            <Animatable.Text
                animation="fadeInUp"
                duration={1200}
                delay={500} // Delay to start after the Thumb animation
                style={styles.text}
                ref={textRef}
                onAnimationEnd={handleAnimationEnd}
            >
                Ihre Bestellung wurde
                erfolgreich aufgegeben.
            </Animatable.Text>
            {/* <Button icon="camera" mode="contained" onPress={triggerAnimations}>
                Press me
            </Button> */}
        </View>
    );
};

export default Success;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        ...StyleSheet.absoluteFillObject,
    },
    linesContainer: {
        position: 'absolute',
        top: '35%',
        left: '45%',
    },
    lines: {
        // Assuming Lines component has intrinsic width and height
        transform: [
            { translateX: -80 }, // half of Lines' width
            { translateY: -90 }, // half of Lines' height
        ],
    },
    thumbContainer: {
        position: 'absolute',
        top: '35%',
        left: '50%',
    },
    thumb: {
        // Assuming Thumb component has intrinsic width and height
        transform: [
            { translateX: -50 }, // half of Thumb's width
            { translateY: -50 }, // half of Thumb's height
        ],
    },
    text: {
        position: 'absolute',
        top: '45%', // Position below the Thumb
        left: '23%',
        transform: [
            { translateX: -50 }, // half of Thumb's width
            { translateY: -50 },
        ],
        fontSize: 18,
        color: '#FFFFFF', // Change color as needed
        textAlign: 'center',
        width: 200, // Adjust width based on your design
    },
});
