# 🧩 ibi

`ibi` — bu Astro uchun yaratilgan mustaqil UI komponentlar kutubxonasi. Har bir komponentni alohida import qilish mumkin (`tree-shakable`).

## ✨ Xususiyatlar

- ⚡️ Astro bilan to‘liq mos
- 🎯 Har bir komponent alohida `import` qilinadi
- 💨 Tailwind CSS asosida
- 🌐 SSR qo‘llab-quvvatlovi
- 📦 Astro Compressor bilan siqilgan

---

## 🔧 O‘rnatish

```bash
pnpm add ibi
# yoki
npm install ibi


ibi/
├── src/
│   └── domain/shared/components/astro/
│       ├── accordions/Accordion.astro
│       ├── cards/Card.astro
│       ├── carousels/MultiCarousel.astro
│       └── context-menu/ContextMenu.astro
