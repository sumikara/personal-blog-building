# Maymun Ne Yapıyor?

Retro masaüstü estetiğinden ilham alan, Astro + Markdown tabanlı kişisel arşiv/blog MVP projesi.

## Özellikler
- Windows 95 / eski internet hissi veren retro arayüz
- Kategori bazlı arşiv yapısı
- Markdown'dan statik blog yazıları
- Mobil uyumlu, sade CSS tasarım

## Kurulum
```bash
npm install
```

## Lokal Çalıştırma
```bash
npm run dev
```

## Production Build
```bash
npm run build
npm run preview
```

## Yeni Blog Yazısı Ekleme
1. `src/content/blog/` içine yeni `.md` dosyası ekleyin.
2. Frontmatter alanlarını doldurun:
   - `title`
   - `date` (YYYY-MM-DD)
   - `category` (`mind_archive | econ_lab | lit_notes | travel_logs`)
   - `description`
   - `filetype`
   - `featured`
   - `cover`
3. İçeriği Markdown olarak yazın.

## Kategori Yapısı
- `mind_archive`: psikoloji, rüyalar, bilinç
- `econ_lab`: ekonomi, veri, AI, sistem düşüncesi
- `lit_notes`: edebiyat, kitap notları, denemeler
- `travel_logs`: şehir, yolculuk, kültür gözlemleri

## Deploy Notları
- **Netlify**: Build command `npm run build`, publish directory `dist`
- **Vercel**: Framework preset Astro, output `dist`
- **GitHub Pages**: Astro static output ile `dist` klasörü deploy edilebilir (Actions ile)
