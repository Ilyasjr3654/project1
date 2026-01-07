import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>⚽ Location de Terrains</Text>
        <Text style={styles.subtitle}>Réservez votre terrain de football</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>🏟️</Text>
          <Text style={styles.featureTitle}>Terrains de qualité</Text>
          <Text style={styles.featureDescription}>
            Découvrez nos terrains de football professionnels avec gazon naturel
            et synthétique
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>⏰</Text>
          <Text style={styles.featureTitle}>Réservation facile</Text>
          <Text style={styles.featureDescription}>
            Réservez en quelques clics et choisissez votre créneau horaire
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>💰</Text>
          <Text style={styles.featureTitle}>Prix compétitifs</Text>
          <Text style={styles.featureDescription}>
            Des tarifs abordables pour tous les budgets, à partir de 180 DH/h
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FieldList')}>
          <Text style={styles.buttonText}>Voir les terrains disponibles</Text>
        </TouchableOpacity>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Pourquoi nous choisir ?</Text>
          <View style={styles.infoItem}>
            <Text style={styles.infoBullet}>✓</Text>
            <Text style={styles.infoText}>Équipements modernes</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoBullet}>✓</Text>
            <Text style={styles.infoText}>Vestiaires et douches</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoBullet}>✓</Text>
            <Text style={styles.infoText}>Parking gratuit</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoBullet}>✓</Text>
            <Text style={styles.infoText}>Éclairage nocturne</Text>
          </View>
        </View>
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
    padding: 30,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
  },
  content: {
    padding: 20,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#2e7d32',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoSection: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoBullet: {
    fontSize: 18,
    color: '#2e7d32',
    marginRight: 10,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    color: '#666',
  },
});

export default HomeScreen;
