import React, { useState } from 'react';
import {
  View, ScrollView, StyleSheet,
  StatusBar, Alert, Text,
} from 'react-native';
 
import { catalog }         from '../data/catalog';
import Theme               from '../config/theme';
import TierSelector        from '../components/TierSelector';
import ProgressHeader      from '../components/ProgressHeader';
import CategorySection     from '../components/CategorySection';
import FinalSummary        from '../components/FinalSummary';
 
const { TIER_CONFIG, CATEGORY_ORDER } = Theme;
 
export default function BuilderScreen() {
  const [lockedTier, setLockedTier]     = useState(null);
  const [activeTier, setActiveTier]     = useState('basica'); // pestaña visible
  const [selected, setSelected]         = useState({});
 
  const totalPrice    = Object.values(selected).reduce((s, p) => s + p.getPrice(), 0);
  const selectedCount = Object.keys(selected).length;
  const isComplete    = selectedCount === CATEGORY_ORDER.length;

  const handleSelectPart = (part) => {
    if (lockedTier && lockedTier !== part.getTier()) {
      Alert.alert(
        '🔒 Gama bloqueada',
        `Tu configuración es de gama "${TIER_CONFIG[lockedTier].label}".\n\n` +
        `No puedes mezclar componentes de distintas gamas.\n` +
        `Pulsa "Reiniciar" para cambiar.`,
        [{ text: 'Entendido' }]
      );
      return;
    }
 
    const cat     = part.getCategory();
    const current = selected[cat];
 
    if (current && current.getName() === part.getName()) {
      const next = { ...selected };
      delete next[cat];
      setSelected(next);
      if (Object.keys(next).length === 0) setLockedTier(null);
    } else {
      setSelected({ ...selected, [cat]: part });
      setLockedTier(part.getTier());
    }
  };
 
  const handleReset = () => {
    setSelected({});
    setLockedTier(null);
  };

  const currentBuild = catalog[activeTier];
  const byCategory   = {};
  currentBuild.getChildren().forEach((part) => {
    const cat = part.getCategory();
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(part);
  });
 
  const cfg = TIER_CONFIG[activeTier];
 
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ProgressHeader
        lockedTier={lockedTier}
        selectedCount={selectedCount}
        totalPrice={totalPrice}
        onReset={handleReset}
      />

      <TierSelector
        activeTier={activeTier}
        lockedTier={lockedTier}
        onSelect={setActiveTier}
      />

      <View style={[styles.gamaBadge, { backgroundColor: cfg.colorLight }]}>
        <Text style={[styles.gamaTitle, { color: cfg.accent }]}>
          {cfg.emoji}  {currentBuild.getName()}
        </Text>
        <Text style={[styles.gamaDesc, { color: cfg.color }]}>
          {currentBuild.getDescription()}  ·  Desde ${currentBuild.getPrice().toLocaleString()}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {CATEGORY_ORDER.map((cat) => {
          if (!byCategory[cat]) return null;
          return (
            <CategorySection
              key={cat}
              category={cat}
              parts={byCategory[cat]}
              cfg={cfg}
              selected={selected}
              activeTier={lockedTier}
              tierKey={activeTier}
              onSelectPart={handleSelectPart}
            />
          );
        })}
 
        <FinalSummary
          lockedTier={lockedTier}
          selected={selected}
          totalPrice={totalPrice}
        />
 
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  gamaBadge: {
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  gamaTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  gamaDesc: {
    fontSize: 12,
    marginTop: 2,
  },
  scroll: {
    padding: 16,
    paddingTop: 10,
  },
});