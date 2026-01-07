import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { footballFields } from '../data/footballFields';

const FieldListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSize, setSelectedSize] = useState(null);

  const filteredFields = footballFields.filter(field => {
    const matchesSearch =
      field.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      field.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSize = selectedSize ? field.size === selectedSize : true;
    return matchesSearch && matchesSize;
  });

  const renderField = ({ item }) => (
    <TouchableOpacity
      style={styles.fieldCard}
      onPress={() => navigation.navigate('FieldDetails', { field: item })}>
      <View style={styles.fieldIcon}>
        <Text style={styles.fieldIconText}>{item.image}</Text>
      </View>
      <View style={styles.fieldInfo}>
        <Text style={styles.fieldName}>{item.name}</Text>
        <Text style={styles.fieldLocation}>📍 {item.location}</Text>
        <Text style={styles.fieldSurface}>{item.surface} • {item.size}</Text>
        <View style={styles.fieldFooter}>
          <Text style={styles.fieldPrice}>{item.pricePerHour} DH/h</Text>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>⭐ {item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Terrains disponibles</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un terrain..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedSize === null && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedSize(null)}>
            <Text
              style={[
                styles.filterButtonText,
                selectedSize === null && styles.filterButtonTextActive,
              ]}>
              Tous
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedSize === '5x5' && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedSize('5x5')}>
            <Text
              style={[
                styles.filterButtonText,
                selectedSize === '5x5' && styles.filterButtonTextActive,
              ]}>
              5x5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedSize === '7x7' && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedSize('7x7')}>
            <Text
              style={[
                styles.filterButtonText,
                selectedSize === '7x7' && styles.filterButtonTextActive,
              ]}>
              7x7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedSize === '11x11' && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedSize('11x11')}>
            <Text
              style={[
                styles.filterButtonText,
                selectedSize === '11x11' && styles.filterButtonTextActive,
              ]}>
              11x11
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={filteredFields}
        renderItem={renderField}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Aucun terrain trouvé</Text>
          </View>
        }
      />
    </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 15,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#66bb6a',
  },
  filterButtonText: {
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  filterButtonTextActive: {
    color: '#ffffff',
  },
  listContainer: {
    padding: 15,
  },
  fieldCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  fieldIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  fieldIconText: {
    fontSize: 40,
  },
  fieldInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  fieldName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  fieldLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  fieldSurface: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  fieldFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fieldPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});

export default FieldListScreen;
