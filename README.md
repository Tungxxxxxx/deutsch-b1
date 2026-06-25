# 🇩🇪 Deutsch B1 — Webapp học tiếng Đức

Ứng dụng web học tiếng Đức từ A0 → B1 trong 6 tháng.  
Dùng trên điện thoại hoặc máy tính, đăng nhập để lưu tiến độ.

## ✨ Tính năng

- 📅 **Lộ trình 26 tuần** với kế hoạch học chi tiết mỗi ngày
- 📖 **Từ vựng** flashcard với IPA + phiên âm tiếng Việt + TTS
- ✍️ **Ngữ pháp** 4 bài học + bài tập tương tác
- 🎧 **Luyện nghe** 4 dạng: nghe từ, nghe câu, chính tả, nghe số
- 📚 **Đọc hiểu** 5 bài đọc A1 với câu hỏi
- 🎮 **Quiz** trắc nghiệm ôn tập
- 🔤 **Phát âm** bảng chữ cái + quy tắc ghép âm
- 📊 **Dashboard** theo dõi tiến độ, streak, thành tựu
- 🔐 **Đăng nhập** Email/Password hoặc Google
- 📱 **PWA** cài đặt như app trên điện thoại

## 🚀 Hướng dẫn cài đặt

### Bước 1: Tạo Firebase Project

1. Vào [Firebase Console](https://console.firebase.google.com/)
2. Nhấn **"Add project"** → đặt tên (VD: `deutsch-b1`)
3. Bỏ Google Analytics (không cần) → **Create project**

### Bước 2: Bật Authentication

1. Trong Firebase Console → **Authentication** → **Get started**
2. Tab **Sign-in method**:
   - Bật **Email/Password**
   - Bật **Google** (chọn email support)

### Bước 3: Tạo Firestore Database

1. **Firestore Database** → **Create database**
2. Chọn **Start in test mode** (sửa rules sau)
3. Chọn region gần nhất (VD: `asia-southeast1`)

### Bước 4: Lấy Firebase Config

1. Vào **Project Settings** (⚙️ icon) → **General**
2. Kéo xuống **"Your apps"** → nhấn **Web** (icon `</>`)
3. Đặt nickname (VD: `deutsch-b1-web`) → **Register app**
4. Copy đoạn `firebaseConfig` → paste vào file `js/firebase-config.js`

### Bước 5: Cập nhật Firestore Rules

1. **Firestore Database** → tab **Rules**
2. Paste nội dung file `firebase-rules.txt` (xem bên dưới)
3. **Publish**

### Bước 6: Deploy lên GitHub Pages

```bash
# 1. Tạo repo mới trên GitHub (VD: deutsch-b1)
# 2. Trong thư mục project:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/deutsch-b1.git
git push -u origin main

# 3. Trên GitHub: Settings → Pages → Source: Deploy from branch → main → / (root)
# 4. Đợi 1-2 phút, web sẽ live tại: https://YOUR_USERNAME.github.io/deutsch-b1/
```

### Bước 7: Thêm domain vào Firebase Auth

1. Firebase Console → **Authentication** → **Settings** → **Authorized domains**
2. Thêm: `YOUR_USERNAME.github.io`

## 📱 Dùng trên điện thoại

1. Mở link GitHub Pages trên Chrome (điện thoại)
2. Nhấn menu ⋮ → **"Add to Home screen"** / **"Thêm vào màn hình chính"**
3. Xong! App icon xuất hiện trên home screen, dùng như app bình thường

## 🔒 Firestore Security Rules

Copy vào Firestore → Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 📁 Cấu trúc project

```
deutsch_b1_webapp_v2/
├── index.html          ← Trang đăng nhập
├── manifest.json       ← PWA config
├── sw.js              ← Service Worker
├── css/style.css      ← Styles chung
├── js/
│   ├── firebase-config.js  ← ⚠️ ĐIỀN CONFIG CỦA BẠN
│   ├── auth.js
│   ├── progress.js
│   ├── app.js
│   ├── tts.js
│   └── data/
│       ├── vocabulary.js
│       ├── daily-plans.js
│       ├── grammar.js
│       ├── listening.js
│       ├── reading.js
│       └── alphabet.js
└── app/
    ├── today.html
    ├── roadmap.html
    ├── vocabulary.html
    ├── grammar.html
    ├── listening.html
    ├── reading.html
    ├── practice.html
    ├── alphabet.html
    └── dashboard.html
```

## 🛠 Tech Stack

- **Frontend:** HTML + CSS + JavaScript (vanilla, no framework)
- **Auth:** Firebase Authentication (Email/Password + Google)
- **Database:** Cloud Firestore (per-user progress)
- **Hosting:** GitHub Pages (free)
- **TTS:** Web Speech API (de-DE)
- **PWA:** Service Worker + manifest.json

## ❓ FAQ

**Q: Tại sao không dùng framework (React/Vue)?**  
A: Để đơn giản, nhẹ, và ai cũng có thể customize. Không cần build step.

**Q: Dữ liệu có mất không?**  
A: Không. Dữ liệu lưu trên Firestore (cloud) + localStorage (backup offline).

**Q: Có offline không?**  
A: Có! Service Worker cache static files. Firestore cũng hỗ trợ offline persistence.

**Q: Tốn tiền không?**  
A: Miễn phí! Firebase free tier: 50K reads/day, 20K writes/day (đủ dùng cá nhân).
