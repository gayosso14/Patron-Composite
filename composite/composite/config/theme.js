const TIER_CONFIG = {
  basica: {
    label:       'Básica',
    emoji:       '🌿',
    color:       '#2E7D32',
    colorLight:  '#E8F5E9',
    colorMid:    '#A5D6A7',
    accent:      '#1B5E20',
    tag:         '#C8E6C9',
    tagText:     '#1B5E20',
  },
  media: {
    label:       'Media',
    emoji:       '⚡',
    color:       '#1565C0',
    colorLight:  '#E3F2FD',
    colorMid:    '#90CAF9',
    accent:      '#0D47A1',
    tag:         '#BBDEFB',
    tagText:     '#0D47A1',
  },
  premium: {
    label:       'Premium',
    emoji:       '👑',
    color:       '#6A1B9A',
    colorLight:  '#F3E5F5',
    colorMid:    '#CE93D8',
    accent:      '#4A148C',
    tag:         '#E1BEE7',
    tagText:     '#4A148C',
  },
};
 
const CATEGORY_ICONS = {
  CPU:         '🧠',
  GPU:         '🎮',
  RAM:         '⚡',
  Motherboard: '🔌',
  Storage:     '💾',
  PSU:         '🔋',
  Case:        '🖥️',
  Cooling:     '❄️',
  Monitor:     '🖵',
  Keyboard:    '⌨️',
  Mouse:       '🖱️',
  Headset:     '🎧',
  Mousepad:    '🟫',
};
 
const CATEGORY_ORDER = [
  'CPU', 'GPU', 'RAM', 'Motherboard', 'Storage',
  'PSU', 'Case', 'Cooling', 'Monitor',
  'Keyboard', 'Mouse', 'Headset', 'Mousepad',
];
 
export default { TIER_CONFIG, CATEGORY_ICONS, CATEGORY_ORDER };