import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type FieldDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'FieldDetails'
>;

type FieldDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'FieldDetails'
>;

interface Props {
  navigation: FieldDetailsScreenNavigationProp;
  route: FieldDetailsScreenRouteProp;
}

const FieldDetailsScreen: React.FC<Props> = ({ navigation, route }) => {
  const { field } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.imageEmoji}>{field.image}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{field.name}</Text>
        <Text style={styles.location}>📍 {field.location}</Text>

        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {field.rating}/5</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Informations</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Surface:</Text>
            <Text style={styles.infoValue}>{field.surface}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Taille:</Text>
            <Text style={styles.infoValue}>{field.size}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Prix:</Text>
            <Text style={styles.infoValue}>{field.pricePerHour} DH/heure</Text>
          </View>
        </View>

        <View style={styles.amenitiesSection}>
          <Text style={styles.sectionTitle}>Équipements</Text>
          <View style={styles.amenitiesContainer}>
            {field.amenities.map((amenity, index) => (
              <View key={index} style={styles.amenityItem}>
                <Text style={styles.amenityIcon}>✓</Text>
                <Text style={styles.amenityText}>{amenity}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.availabilitySection}>
          <Text style={styles.sectionTitle}>Créneaux disponibles</Text>
          <View style={styles.slotsContainer}>
            {field.availability.map((slot, index) => (
              <View key={index} style={styles.slotItem}>
                <Text style={styles.slotText}>{slot}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => navigation.navigate('Booking', { field })}>
          <Text style={styles.bookButtonText}>Réserver ce terrain</Text>
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
  imageContainer: {
    height: 200,
    backgroundColor: '#2e7d32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageEmoji: {
    fontSize: 100,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  ratingContainer: {
    marginBottom: 20,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f9a825',
  },
  infoSection: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  amenitiesSection: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 10,
  },
  amenityIcon: {
    fontSize: 16,
    color: '#2e7d32',
    marginRight: 8,
    fontWeight: 'bold',
  },
  amenityText: {
    fontSize: 14,
    color: '#666',
  },
  availabilitySection: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  slotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  slotItem: {
    backgroundColor: '#e8f5e9',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    margin: 4,
  },
  slotText: {
    fontSize: 14,
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

export default FieldDetailsScreen;
