import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';


import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail() {

    const navigation = useNavigation();
    const message = 'mensagem de teste';

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Heroi do caso: ....',
            recipients: ['euler.dacosta@gmail.com'],
            body: message
        });
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=5585123451234&text={message}`);
    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity style={styles.detailsButton} onPress={ navigateBack }>
                    <Feather name="arrow-left" size={16} color="#E02041"/>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty , { marginTop: 0 }]}> ONG:</Text>
                <Text style={styles.incidentValue}> APAE</Text>
                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Caso teste 001</Text>
                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!ONG:</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={ sendWhatsapp }>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={ sendMail }>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
