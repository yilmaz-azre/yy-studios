/* YY Studios profil okuyucu
   Her oyunun HTML'ine </body> öncesinde ekle:  <script src="yy-profil.js"></script>
   Site, "Oyna" bağlantısına şunları ekler: ?name=İsim&av=küçükResim&crown=1&uid=kimlik
   Bu dosya onları okuyup window.YY_PROFILE içine koyar. Bilgi yoksa null olur. */
(function () {
  var KEY = 'yy_profile_from_site', q = new URLSearchParams(location.search), p = null;
  if (q.get('name')) {
    p = {
      name: q.get('name').slice(0, 18),     // oyuncu adı
      avatar: q.get('av') || null,          // küçük (44px) profil resmi, data:image/jpeg...
      admin: q.get('crown') === '1',        // admin tacı
      uid: q.get('uid') || null             // her oyuncuya özel kimlik (arkadaşlık için)
    };
    try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {}
  } else {
    try { p = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
  }
  window.YY_PROFILE = p;
  window.yyDisplayName = function () {      // taçlı görünen ad
    return p ? (p.admin ? '❄️👑 ' : '') + p.name : null;
  };
})();
/* Örnek kullanım (oyunun içinde):
     if (window.YY_PROFILE) {
       document.getElementById('oyuncuAdi').textContent = yyDisplayName();
       if (YY_PROFILE.avatar) document.getElementById('oyuncuResmi').src = YY_PROFILE.avatar;
     } */