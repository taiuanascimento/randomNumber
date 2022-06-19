import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native';


const imageURI = './assets/img/dio-logo.png';

const App = () => {
    const [numero, setNumero] = useState(10);

    const handleNumero = () => {
        const novoNumero = Math.floor(Math.random() * 100);
        setNumero(novoNumero);
    };

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.number}>{numero}</Text>
            <TouchableOpacity onPress={handleNumero} style={style.button}>
                <Text style={style.textButton}>Gerar Número</Text>
            </TouchableOpacity>
            <Image
                style={style.image}
                source={require(imageURI)}
            />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    number: {
        fontSize: 70,
        fontWeight: 'bold',
        color: 'black',
        //padding: 20,
    },

    textButton: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: 'black',
        borderRadius: 10,
        width: 250,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        resizeMode: 'contain',
        alignItems: 'center',
        width: 250,
        height: 250,
    }

});

export default App;