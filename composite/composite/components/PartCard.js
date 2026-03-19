import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Theme from '../config/theme';
 
const { CATEGORY_ICONS } = Theme;
 
export default function PartCard({ part, cfg, isSelected, isDisabled, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
      style={[
        styles.card,
        isSelected && { borderColor: cfg.color, backgroundColor: cfg.colorLight },
        isDisabled && styles.cardDisabled,
      ]}
    >
      <View style={styles.topRow}>
        <View style={[
          styles.radio,
          { borderColor: isDisabled ? '#CCC' : cfg.color },
          isSelected && { backgroundColor: cfg.color },
        ]}>
          {isSelected && <View style={styles.radioDot} />}
        </View>
 
        <Text
          style={[
            styles.partName,
            { color: isDisabled ? '#BDBDBD' : '#212121' },
            isSelected && { color: cfg.accent, fontWeight: '700' },
          ]}
          numberOfLines={1}
        >
          {part.getName()}
        </Text>
 
        <Text style={[
          styles.price,
          { color: isDisabled ? '#BDBDBD' : cfg.color },
        ]}>
          ${part.getPrice().toLocaleString()}
        </Text>
      </View>

      <Text
        style={[
          styles.desc,
          { color: isDisabled ? '#C8C8C8' : '#757575' },
        ]}
        numberOfLines={2}
      >
        {part.getDescription()}
      </Text>

      {isSelected && (
        <View style={[styles.chip, { backgroundColor: cfg.tag }]}>
          <Text style={[styles.chipText, { color: cfg.tagText }]}>✓ Seleccionado</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    padding: 14,
    marginBottom: 8,
  },
  cardDisabled: {
    backgroundColor: '#FAFAFA',
    opacity: 0.5,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  partName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#212121',
  },
  price: {
    fontSize: 15,
    fontWeight: '800',
  },
  desc: {
    fontSize: 12,
    lineHeight: 17,
    marginLeft: 30,
    color: '#757575',
  },
  chip: {
    alignSelf: 'flex-start',
    marginTop: 8,
    marginLeft: 30,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  chipText: {
    fontSize: 11,
    fontWeight: '700',
  },
});