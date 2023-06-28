import * as React from 'react';
import { ActivityIndicator, View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import axios from 'axios';



const Accpg = ({ navigation }) => {
    useEffect(() => {
        loadFonts();
    }, []);

    const loadFonts = async () => {
        await Font.loadAsync({
            'gochi-hand': require('../fonts/GochiHand-Regular.ttf'),
        });
    };
    

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);
  
    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#B484A7" style={styles.activityIndicator} />
            </View>
        );
    }


    const handleButtonClick = async () => {
        setIsLoading(true);

        try {
            // Run your custom code here
            await launchhh();

            setTimeout(() => {
                setIsLoading(false);
            }, 9000);

        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false);
        }
        
    };

    const launchhh = async () => {
        axios.get('http://127.0.0.1:5000/run_selenium')
            .then(response => {
                // Handle the response from the backend
                console.log(response.data);
        
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    };



    return (
        <View style={styles.bgc} >
            <View style={styles.cont1}>

                <Text style={styles.txt1}>Hello! click "Start" to start your journey!</Text>

                <TouchableOpacity 
                    style={styles.nabut1}
                    underlayColor = "#135C63"
                    onPress={handleButtonClick}
                    //LAUNCH AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                >
                    <Text style={styles.nabt1}>Start</Text>

                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.nabut2}
                    underlayColor = "#135C63"
                    onPress={() => navigation.navigate('Fave')}

                >
                    <Text style={styles.nabt2}>Favourite Pages</Text>

                </TouchableOpacity>

                
            </View>

            <View style={styles.cont2}>

                <TouchableOpacity
                    style={styles.nabut3}
                    underlayColor = "#135C63"
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Text style={styles.nabt3}>Settings</Text>

                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.nabut4}
                    underlayColor = "#B484A7"
                    onPress={() => navigation.navigate('Chatbot')} //CHATBOT?
                >
                    <Text style={styles.nabt3}>Chatbot</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
};



const styles = StyleSheet.create({
    bgc: {
        flex: 1,
        backgroundColor: '#FFEEDB',
    },

    txt1: {
        fontFamily: 'gochi-hand',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 60,
        lineHeight: 71,
        display: 'flex',
        alignItems: 'center',
        color: '#000',
    },

    nabut1: {
        width: 318,
        height: 149,
        backgroundColor: '#177E89',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 55,
        marginTop: 55,

    },    

    nabt1: {
        fontFamily: 'gochi-hand',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 70,
        lineHeight: 83,
        display: 'flex',
        alignItems: 'center',
        textDecorationLine: 'underline',
        color: '#FFEEDB',
    },


    nabut2: {
        width: 438,
        height: 92,
        backgroundColor: '#177E89',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    
    nabt2: {
        fontFamily: 'gochi-hand',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 45,
        lineHeight: 53,
        display: 'flex',
        alignItems: 'center',
        textDecorationLine: 'underline',
        color: '#FFEEDB',
    },

    nabut3: {
        width: 258,
        height: 134,
        backgroundColor: '#B484A7',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        marginRight: 180
    },

    nabt3: {
        fontFamily: 'gochi-hand',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 55,
        lineHeight: 65,
        display: 'flex',
        alignItems: 'center',
        textDecorationLine: 'underline',
        color: '#FFEEDB',
    },

    nabut4: {
        width: 258,
        height: 134,
        backgroundColor: '#B484A7',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },


    cont1: {
        paddingTop: 98,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cont2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 47,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    activityIndicatorContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 10,
        padding: 20,
    },


});

  
        //onPress={() => navigation.goBack()}


export default Accpg;
