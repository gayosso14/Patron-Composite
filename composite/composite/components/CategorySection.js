import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Theme from '../config/theme';
import PartCard from './PartCard';
 
const { CATEGORY_ICONS } = Theme;
 
export default function CategorySection({
  category, parts, cfg, selected, activeTier, tierKey, onSelectPart,
}) {
  const [expanded, setExpanded] = useState(false);
  const hasSelection = selected[category]?.getTier() === tierKey;
 
  return (
    <View style={styles.section}>
      <TouchableOpacity
        style={[styles.catHeader, hasSelection && { borderLeftColor: cfg.color }]}
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
      >
        <Text style={styles.catIcon}>{CATEGORY_ICONS[category]}</Text>
        <Text style={styles.catName}>{category}</Text>
        {hasSelection && (
          <Text style={[styles.selectedName, { color: cfg.color }]} numberOfLines={1}>
            {selected[category].getName()}
          </Text>
        )}
        <Text style={[styles.arrow, { color: cfg.color }]}>
          {expanded ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>
 
      {expanded && (
        <View style={styles.partsList}>
          {parts.map((part) => (
            <PartCard
              key={part.getName()}
              part={part}
              cfg={cfg}
              isSelected={
                selected[category] !== undefined &&
                selected[category].getName() === part.getName()
              }
              isDisabled={activeTier !== null && activeTier !== part.getTier()}
              onPress={() => onSelectPart(part)}
            />
          ))}
        </View>
      )}
    </View>
  );
}
 
const styles = StyleSheet.create({
  section: {
    marginBottom: 4,
  },
  catHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#E0E0E0',
    gap: 8,
  },
  catIcon: {
    fontSize: 16,
  },
  catName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#424242',
    letterSpacing: 0.5,
    width: 90,
  },
  selectedName: {
    flex: 1,
    fontSize: 12,
    fontWeight: '500',
  },
  arrow: {
    fontSize: 11,
    fontWeight: '700',
  },
  partsList: {
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});