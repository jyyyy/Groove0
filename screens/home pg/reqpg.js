import * as React from 'react';
import { Button, View, Text, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { useState } from 'react';
import * as Font from 'expo-font';
import {db} from "../../firebase";
import { collection, getDocs, addDoc} from "firebase/firestore"




const ReqPg = ({ navigation }) => {
    useEffect(() => {
        loadFonts();
    }, []);

    const loadFonts = async () => {
        await Font.loadAsync({
            'gochi-hand': require('../fonts/GochiHand-Regular.ttf'),
        });
    };

    const [link, setLink] = useState('');
    const [emaill, setEmaill] = useState('');
  
    async function handleSubmit() {
        console.log(db)
        try {
            await addDoc(collection(db, 'req'),{
                link: link,
                emaill: emaill,
            });

            //clear form inputs
            //setName('')
            //setPw('')
            //setPw2('')

            alert("Requested successfully!")
            navigation.navigate('Accpg') 

        }
        catch (error) {
            console.error('Error creating account: ', error)
        }
        
    }

  




    return (
        <View style={styles.bgc}>

            <View style={styles.cont0}>
                <Text style={styles.txt}>Request a Webpage tutorial!</Text>
            </View>


            <View style={styles.cont1}>
            
                <Text style={styles.txt1}>Link:</Text>

                <TextInput
                    style={styles.input1}
                    placeholder="Click to enter link of the webpage you would like to have added!"
                    value={link}
                    onChangeText={(text) => setLink(text)}
                />

            </View>

            <View style={styles.cont2}>

                <Text style={styles.txt1}>Email:</Text>

                <TextInput
                    style={styles.input1}
                    placeholder="Click here to enter your email!"
                    value={emaill}
                    onChangeText={(text) => setEmaill(text)}
                />
            </View>

            <View style={styles.cont3}>

                <TouchableOpacity 
                    style={styles.cabut} 
                    onPress={() => navigation.goBack()}

                >
                    <Text style={styles.cabt}>Back</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cabut1}
                    onPress={handleSubmit}

                >
                    <Text style={styles.cabt}>Request</Text>

                </TouchableOpacity>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    bgc: {
        flex: 1,
        backgroundColor: '#FFEEDB',
        padding: 20,
        alignItems: 'center',
    },
    
    input1: {
        width: 540,
        height: 100,
        backgroundColor: '#B484A7',
        paddingHorizontal: 10,
        borderRadius: 20,
        marginLeft:50,
        marginTop:0,
        marginBottom:0,
        fontSize:35,
    },

    txt: {
        fontFamily: 'gochi-hand',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 70,
        lineHeight: 71,
        display: 'flex',
        alignItems: 'center',
        color: '#000',
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
        paddingRight:106,

    },

    cabut: {
        width: 340,
        height: 108,
        backgroundColor: '#177E89',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        marginRight:40,

    },    

    cabt: {
        fontFamily: 'gochi-hand',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 60,
        lineHeight: 71,
        display: 'flex',
        textDecorationLine: 'underline',
        color: '#FFEEDB',
    },

    cabut1: {
        width: 340,
        height: 108,
        backgroundColor: '#B484A7',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        marginLeft: 40,

    },    

    cabt1: {
        fontFamily: 'gochi-hand',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 30,
        lineHeight: 71,
        display: 'flex',
        alignItems: 'center',
        textDecorationLine: 'underline',
        color: '#FFEEDB',
    },

    cont0: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40,
    },

    cont1: {
        flexDirection: 'row',
        paddingTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },


    cont2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    cont3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:30,
    },


});

  


export default ReqPg;