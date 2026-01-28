# 📊 Admin Dashboard

Next.js App Router kullanılarak geliştirilmiş, gerçek dünya senaryolarına uygun modern bir **Admin Dashboard (Yönetim Paneli)** uygulaması.

Bu proje; demo amaçlı basit bir arayüz değil, **gerçek projelerde kullanılan yönetim paneli akışlarını** yansıtacak şekilde tasarlanmıştır. Ölçeklenebilir, sürdürülebilir ve okunabilir bir frontend mimarisi hedeflenmiştir.

---

## 🚀 Proje Özeti

Admin Dashboard uygulaması; **kullanıcı, ürün, sipariş ve analiz** gibi temel yönetim modüllerini içerir.  
Proje boyunca Next.js’in modern yaklaşımı olan **App Router**, **Server Components** ve **Server Actions** aktif şekilde kullanılmıştır.

---

## ✨ Özellikler

- 👥 **Kullanıcı Yönetimi**
  - Kullanıcı listeleme
  - URL parametresi ile modal detay gösterimi

- 📦 **Ürün Yönetimi**
  - Ürün listeleme
  - Dynamic route ile ürün oluşturma ve düzenleme

- 🧾 **Sipariş Yönetimi**
  - Siparişlerin listelenmesi
  - Durum bazlı görsel ayrım

- 📊 **Dashboard Analitik**
  - Satış grafikleri
  - Kategori bazlı ürün dağılımı

- 🔔 **Kullanıcı Deneyimi**
  - Toast bildirimleri ile aksiyon geri bildirimi

---

## 🧠 Teknik Mimari

- **Next.js (App Router)**
  - Server Components ile veri çekme
  - Server Actions ile form işlemleri
  - `layout.tsx` ve `loading.tsx` kullanımı
  - Dynamic routing (`[...slug]`)

- **TypeScript**
  - Type-safe geliştirme

- **TailwindCSS**
  - Responsive ve modern UI

- **REST API**
  - `json-server` ile mock backend

- **Chart.js**
  - Satış ve kategori analizleri

- **Component-based & Service-layered Mimari**
  - Temiz klasör yapısı
  - Yeniden kullanılabilir bileşenler
  - Ayrıştırılmış veri ve UI katmanları

---

## 🛠️ Kullanılan Teknolojiler

- Next.js (App Router)
- TypeScript
- TailwindCSS
- REST API (json-server)
- Chart.js & react-chartjs-2
- react-toastify

---

## 📁 Klasör Yapısı (Özet)
**src/
├── app/
│ ├── dashboard/
│ ├── products/
│ ├── users/
│ ├── orders/
│ ├── layout.tsx
│ └── loading.tsx
├── components/
├── services/
├── utils/
└── styles/**


---

## ⚙️ Kurulum & Çalıştırma

### 1️⃣ Repoyu klonla

git clone https://github.com/bekirsglm/admin-dashboard.git
cd admin-dashboard

npm run server
nom install
npm run dev

Uygulama şu adreste çalışır:
👉 http://localhost:3000


## Bu proje öğrenme ve kendini geliştirme amacıyla hazırlanmıştır.
Gerçek dünya frontend mimarileri ve admin panel yapıları referans alınmıştır.


# EKRAN GÖRÜNTÜSÜ - SCREENSHOT
![EkranKayd2026-01-28150847-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/2816c6e8-56f0-4ff8-9e79-67280213e05c)

