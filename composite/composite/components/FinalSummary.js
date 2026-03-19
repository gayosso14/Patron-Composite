import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Theme from '../config/theme';
 
const { TIER_CONFIG, CATEGORY_ICONS, CATEGORY_ORDER } = Theme;
 
export default function FinalSummary({ lockedTier, selected, totalPrice }) {
  if (!lockedTier || Object.keys(selected).length < CATEGORY_ORDER.length) return null;
 
  const cfg = TIER_CONFIG[lockedTier];
 
  return (
    <View style={styles.card}>
      <View style={[styles.header, { backgroundColor: cfg.colorLight, borderBottomColor: cfg.colorMid }]}>
        <Text style={styles.headerEmoji}>{cfg.emoji}</Text>
        <Text style={[styles.headerTitle, { color: cfg.accent }]}>
          PC {cfg.label} — Lista
        </Text>
        <Text style={[styles.headerSub, { color: cfg.color }]}>
          Todos los componentes seleccionados
        </Text>
      </View>

      {CATEGORY_ORDER.map((cat, i) => {
        const part = selected[cat];
        if (!part) return null;
        return (
          <View
            key={cat}
            style={[
              styles.line,
              i % 2 === 0 && { backgroundColor: '#FAFAFA' },
            ]}
          >
            <Text style={styles.lineIcon}>{CATEGORY_ICONS[cat]}</Text>
            <View style={styles.lineInfo}>
              <Text style={styles.lineCat}>{cat}</Text>
              <Text style={styles.lineName} numberOfLines={1}>{part.getName()}</Text>
            </View>
            <Text style={[styles.linePrice, { color: cfg.color }]}>
              ${part.getPrice().toLocaleString()}
            </Text>
          </View>
        );
      })}

      <View style={[styles.totalRow, { borderTopColor: cfg.colorMid }]}>
        <Text style={styles.totalLabel}>TOTAL</Text>
        <Text style={[styles.totalPrice, { color: cfg.accent }]}>
          ${totalPrice.toLocaleString()}
        </Text>
      </View>

      <Text style={styles.footer}>
        Precios en USD · Configuración guardada
      </Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginTop: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  headerEmoji: {
    fontSize: 32,
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  headerSub: {
    fontSize: 12,
    marginTop: 3,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 10,
  },
  lineIcon: {
    fontSize: 16,
    width: 26,
    textAlign: 'center',
  },
  lineInfo: {
    flex: 1,
  },
  lineCat: {
    fontSize: 10,
    color: '#9E9E9E',
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  lineName: {
    fontSize: 13,
    color: '#212121',
    fontWeight: '600',
    marginTop: 1,
  },
  linePrice: {
    fontSize: 13,
    fontWeight: '800',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1.5,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: '900',
    color: '#212121',
    letterSpacing: 2,
  },
  totalPrice: {
    fontSize: 26,
    fontWeight: '900',
  },
  footer: {
    textAlign: 'center',
    fontSize: 11,
    color: '#BDBDBD',
    paddingBottom: 14,
  },
});