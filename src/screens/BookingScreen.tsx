import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type BookingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Booking'
>;

type BookingScreenRouteProp = RouteProp<RootStackParamList, 'Booking'>;

interface Props {
  navigation: BookingScreenNavigationProp;
  route: BookingScreenRouteProp;
}

const BookingScreen: React.FC<Props> = ({ navigation, route }) => {
  const { field } = route.params;
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const validatePhoneNumber = (phone: string): boolean => {
    // Moroccan phone numbers: 10 digits starting with 0 (e.g., 0612345678)
    const phoneRegex = /^0[5-7][0-9]{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedSlot || !userName || !phoneNumber) {
      Alert.alert(
        'Informations manquantes',
        'Veuillez remplir tous les champs pour continuer.'
      );
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert(
        'Numéro invalide',
        'Veuillez entrer un numéro de téléphone marocain valide (ex: 0612345678).'
      );
      return;
    }

    Alert.alert(
      'Réservation confirmée! ✅',
      `Votre réservation pour ${field.name} le ${selectedDate} à ${selectedSlot} a été confirmée.\n\nNous vous contacterons au ${phoneNumber} pour confirmer les détails.\n\nMontant: ${field.pricePerHour} DH`,
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'),
        },
      ]
    );
  };

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      dates.push(`${day}/${month}/${date.getFullYear()}`);
    }
    return dates;
  };

  const availableDates = generateDates();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Réservation</Text>
        <Text style={styles.fieldName}>{field.name}</Text>
        <Text style={styles.fieldLocation}>{field.location}</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sélectionnez une date</Text>
          <View style={styles.datesContainer}>
            {availableDates.map((date, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dateItem,
                  selectedDate === date && styles.dateItemSelected,
                ]}
                onPress={() => setSelectedDate(date)}>
                <Text
                  style={[
                    styles.dateText,
                    selectedDate === date && styles.dateTextSelected,
                  ]}>
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choisissez un créneau horaire</Text>
          <View style={styles.slotsContainer}>
            {field.availability.map((slot, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.slotItem,
                  selectedSlot === slot && styles.slotItemSelected,
                ]}
                onPress={() => setSelectedSlot(slot)}>
                <Text
                  style={[
                    styles.slotText,
                    selectedSlot === slot && styles.slotTextSelected,
                  ]}>
                  {slot}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vos informations</Text>
          <TextInput
            style={styles.input}
            placeholder="Nom complet"
            value={userName}
            onChangeText={setUserName}
          />
          <TextInput
            style={styles.input}
            placeholder="Numéro de téléphone"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.summarySection}>
          <Text style={styles.sectionTitle}>Résumé de la réservation</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Terrain:</Text>
            <Text style={styles.summaryValue}>{field.name}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Date:</Text>
            <Text style={styles.summaryValue}>
              {selectedDate || 'Non sélectionnée'}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Heure:</Text>
            <Text style={styles.summaryValue}>
              {selectedSlot || 'Non sélectionnée'}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Prix:</Text>
            <Text style={styles.summaryPrice}>{field.pricePerHour} DH</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
          <Text style={styles.bookButtonText}>Confirmer la réservation</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2e7d32',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  fieldName: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 4,
  },
  fieldLocation: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.9,
  },
  content: {
    padding: 20,
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 15,
  },
  datesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateItem: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  dateItemSelected: {
    backgroundColor: '#2e7d32',
    borderColor: '#2e7d32',
  },
  dateText: {
    fontSize: 14,
    color: '#333',
  },
  dateTextSelected: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  slotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  slotItem: {
    backgroundColor: '#e8f5e9',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: '#c8e6c9',
  },
  slotItemSelected: {
    backgroundColor: '#2e7d32',
    borderColor: '#2e7d32',
  },
  slotText: {
    fontSize: 14,
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  slotTextSelected: {
    color: '#ffffff',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  summarySection: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  summaryPrice: {
    fontSize: 18,
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: '#2e7d32',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  bookButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookingScreen;
