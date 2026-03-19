import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Theme from '../config/theme';
 
const { TIER_CONFIG } = Theme;
 
export default function TierSelector({ activeTier, lockedTier, onSelect }) {
  return (
    <View style={styles.bar}>
      {Object.entries(TIER_CONFIG).map(([key, cfg]) => {
        const isActive = activeTier === key;
        const isLocked = lockedTier && lockedTier !== key;
 
        return (
          <TouchableOpacity
            key={key}
            style={[
              styles.tab,
              isActive && { backgroundColor: cfg.color, borderColor: cfg.color },
              isLocked && styles.tabLocked,
            ]}
            onPress={() => !isLocked && onSelect(key)}
            activeOpacity={0.8}
          >
            <Text style={[
              styles.tabEmoji,
              isLocked && { opacity: 0.3 },
            ]}>
              {cfg.emoji}
            </Text>
            <Text style={[
              styles.tabLabel,
              { color: isActive ? '#FFFFFF' : (isLocked ? '#BDBDBD' : '#424242') },
              isActive && { fontWeight: '700' },
            ]}>
              {cfg.label}
            </Text>
            {isLocked && (
              <Text style={styles.lockIcon}>🔒</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
 
const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    padding: 4,
    gap: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: 'transparent',
    gap: 5,
  },
  tabLocked: {
    backgroundColor: '#F5F5F5',
  },
  tabEmoji: {
    fontSize: 14,
  },
  tabLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  lockIcon: {
    fontSize: 10,
  },
});