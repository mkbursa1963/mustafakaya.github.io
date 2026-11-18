# Mustafa Kaya · Portfolyo

Astro ve TypeScript ile hazırlanmış Türkçe, tek sayfalık yazılım geliştirici portfolyosu. Yayın çıktısı statiktir.

## Yerelde çalıştırma

Node.js 22.12 veya üstü ile:

```sh
npm ci
npm run dev
```

Astro'nun terminalde gösterdiği adresi aç. Windows PowerShell betik çalıştırmayı engelliyorsa komutlarda `npm.cmd` kullan.

```sh
npm run check
npm run build
npm run preview
```

Üretim derlemesi `dist/` dizinine yazılır.

## İçeriği düzenleme

[src/data/portfolio.ts](src/data/portfolio.ts) dosyasındaki `projects`, `skills` ve `contact` alanlarını güncelle. Proje kartlarında problem tanımı, katkı, teknolojiler ve isteğe bağlı `repository` bağlantısı bulunur.

`linkedin` için tam profil adresini, `email` için e-posta adresini kullan. CV için tam bir HTTPS adresi girebilir veya PDF'yi `public/` dizinine koyup `cv` değerine örneğin `cv.pdf` yazabilirsin. Yerel CV bağlantısı yayınlandığı Pages yoluna göre oluşturulur. Boş iletişim alanları sayfada gizlenir.

## GitHub Pages'i etkinleştirme

1. Dosyaları bir GitHub deposunun `main` dalına gönder. Kullanıcı sitesi için deponun adı `mkbursa1963.github.io` olmalı. Başka bir depo adı kullanırsan site varsayılan olarak o deponun alt yolundan yayınlanır.
2. Depoda **Settings → Pages → Build and deployment → Source** alanından **GitHub Actions** seç.
3. **Actions → GitHub Pages → Run workflow** ile ilk çalıştırmayı başlat. Sonraki `main` gönderimlerinde workflow otomatik çalışır.
4. Yayın adresini tamamlanan çalıştırmanın `github-pages` ortamından veya **Settings → Pages** ekranından al.

Workflow, GitHub Pages'in bildirdiği origin ve alt yolu Astro'ya aktarır. Yerelde alt yolu denemek için `PAGES_BASE_PATH` ortam değişkenini örneğin `/Portfolyom` olarak ayarlayıp yeniden derle. Önizlemede aynı ortam değişkenini kullan ve adresi `/Portfolyom/` ile aç.
