import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Theme from '../config/theme';
 
const { TIER_CONFIG, CATEGORY_ORDER } = Theme;
 
export default function ProgressHeader({ lockedTier, selectedCount, totalPrice, onReset }) {
  const total    = CATEGORY_ORDER.length;
  const progress = selectedCount / total;
  const cfg      = lockedTier ? TIER_CONFIG[lockedTier] : null;
 
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>
            {cfg
              ? `${cfg.emoji} Gama ${cfg.label}`
              : '🖥️ PC Builder'}
          </Text>
          <Text style={styles.subtitle}>
            {selectedCount === 0
              ? 'Elige una gama para comenzar'
              : `${selectedCount} de ${total} componentes`}
          </Text>
        </View>
 
        {selectedCount > 0 && (
          <View style={styles.right}>
            <Text style={[styles.totalPrice, cfg && { color: cfg.color }]}>
              ${totalPrice.toLocaleString()}
            </Text>
            <TouchableOpacity onPress={onReset} style={styles.resetBtn}>
              <Text style={styles.resetText}>Reiniciar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.progressRow}>
        {CATEGORY_ORDER.map((cat, i) => (
          <View
            key={cat}
            style={[
              styles.segment,
              {
                backgroundColor: (cfg && selectedCount > 0 && i < selectedCount)
                  ? cfg.color
                  : '#E0E0E0',
              },
            ]}
          />
        ))}
      </View>
 
      {selectedCount > 0 && (
        <Text style={[styles.progressLabel, cfg && { color: cfg.color }]}>
          {Math.round(progress * 100)}% completado
        </Text>
      )}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#212121',
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 12,
    color: '#9E9E9E',
    marginTop: 2,
  },
  right: {
    alignItems: 'flex-end',
    gap: 4,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: '900',
    color: '#212121',
  },
  resetBtn: {
    backgroundColor: '#FFEBEE',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  resetText: {
    color: '#C62828',
    fontSize: 11,
    fontWeight: '700',
  },
  progressRow: {
    flexDirection: 'row',
    gap: 3,
    marginBottom: 4,
  },
  segment: {
    flex: 1,
    height: 5,
    borderRadius: 3,
  },
  progressLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#9E9E9E',
  },
});