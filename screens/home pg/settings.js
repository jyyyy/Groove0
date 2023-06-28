import * as React from 'react';
import { Button, View, Text, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { useEffect } from 'react';




const Settings = ({ navigation }) => {
    useEffect(() => {
        loadFonts();
    }, []);

    const loadFonts = async () => {
        await Font.loadAsync({
            'gochi-hand': require('../fonts/GochiHand-Regular.ttf'),
        });
    };




    return (
        <View style={styles.bgc} >
            <View style={styles.cont0}>
                <Text style={styles.txt}>Settings</Text>
            </View>


            <View style={styles.cont1}>
                <View style={styles.cont2}>
                    <Text style={styles.txt1}>Font Size:</Text>
                    <Text style={styles.txt1}>Mouse Sensitivity:</Text>
                    <Text style={styles.txt1}>Language:</Text>
                    <Text style={styles.txt1}>Vision modes:</Text>
                </View>
                <View style={styles.cont3}>
                    <TouchableOpacity style={styles.stbut}>
                        <Text style={styles.stbt}>Medium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.stbut}>
                        <Text style={styles.stbt}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.stbut1}>
                        <Text style={styles.stbt}>English</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.stbut1}>
                        <Text style={styles.stbt}>None</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.stbut2}
                        onPress={() => navigation.goBack()}>
                        <Text style={styles.stbt}>Save</Text>
                    </TouchableOpacity>
                </View>

            </View>

            

        </View>
    );
};


const styles = StyleSheet.create({
    bgc: {
        flex: 1,
        backgroundColor: '#FFEEDB',
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    input1: {
        width: 518,
        height: 80,
        backgroundColor: '#B484A7',
        paddingHorizontal: 10,
        borderRadius: 20,
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
        fontSize: 55,
        lineHeight: 71,
        display: 'flex',
        alignItems: 'center',
        color: '#000',
        paddingTop: 30,
        paddingRight:106,

    },

    stbut: {
        width: 298,
        height: 79,
        backgroundColor: '#FFDDB5',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 20,

    },    

    stbt: {
        fontFamily: 'gochi-hand',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 60,
        lineHeight: 71,
        display: 'flex',
        alignItems: 'center',
        textDecorationLine: 'underline',
        color: '#000',
    },

    stbut1: {
        width: 298,
        height: 79,
        backgroundColor: '#B484A7',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 20,
 

    },    

    stbt1: {
        fontFamily: 'gochi-hand',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 60,
        lineHeight: 71,
        display: 'flex',
        alignItems: 'center',
        textDecorationLine: 'underline',
        color: '#fff',
    },
    stbut2: {
        width: 298,
        height: 79,
        backgroundColor: '#177E89',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 20,

    },    

    

    cont0: {
        paddingTop: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },

    cont1: {
        flexDirection: 'row',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },


    cont2: {
        width:550,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 150,
        paddingLeft: 20,
    },    
    
    cont3: {
        width:550,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

});

  


export default Settings;