// Favoriler, ziyaretler, rozetler
const favKey = 'imr_fav';
const visitKey = 'imr_visit';
const badgeKey = 'imr_badge';

// Favori ekle/çıkar
function toggleFavorite(id) {
  let favs = JSON.parse(localStorage.getItem(favKey) || '[]');
  const idx = favs.indexOf(id);
  if (idx > -1) favs.splice(idx, 1); else favs.push(id);
  localStorage.setItem(favKey, JSON.stringify(favs));
  return idx === -1;
}

// Ziyaret kaydet
function addVisit(id) {
  let visits = JSON.parse(localStorage.getItem(visitKey) || '{}');
  visits[id] = Date.now();
  localStorage.setItem(visitKey, JSON.stringify(visits));
  checkBadges(Object.keys(visits).length);
}

// Rozet kontrolü
function checkBadges(count) {
  let badges = JSON.parse(localStorage.getItem(badgeKey) || '[]');
  if (count >= 5 && !badges.includes('Gezgin')) badges.push('Gezgin');
  if (count >= 10 && !badges.includes('Keşifçi')) badges.push('Keşifçi');
  localStorage.setItem(badgeKey, JSON.stringify(badges));
}
