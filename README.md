# Junoon Capital - Mobile App 📱

*(React Native - Android Build)*

![App Logo](https://drive.google.com/uc?export=view&id=1Je3K7Uil2T_hHLlKzNEKeYJgPNS71_xy
)

---

### 🚀 Overview

Junoon Capital App is a **financial solutions platform** offering streamlined access to services like **Digital Loans, Microfinance Loans, Secured & Unsecured Business Loans.**
Designed with simplicity and trust, this app enhances customer experience with a clean, professional UI and smooth performance, fully aligned with **Junoon Capital's website aesthetics.**

---

### 🛠️ Built With

* **React Native CLI**
* **TypeScript**
* **React Navigation / Drawer**
* **Android Studio** (Build & Testing)

---

### 📂 App Structure

```
JunoonCapitalApp/
│
├── assets/
│   └── images/
│
├── src/
│   ├── components/        # Reusable UI Components
│   ├── constants/         # Static Data (images, links)
│   ├── navigation/        # App Navigation Setup
│   ├── screens/           # Core Screens (Home, Contact, Digital Loan etc.)
│   ├── context/           # Context API for State Sharing
│   └── AppNavigator.tsx   # Drawer Navigation
│
├── App.tsx                 # Entry Point
├── package.json
├── android/                # Android Build Directory
└── README.md
```

---

### ✨ Key Features

✅ Clean, Modern UI
✅ Easy Navigation via Drawer
✅ All Loan Options Well Structured
✅ Google Drive Images Optimized
✅ Lightweight Splash Screen with Animation

---

### 📸 Screens in App

| Screen                | Purpose                          |
| --------------------- | -------------------------------- |
| **Home**              | Overview, CTA Navigation         |
| **Contact Us**        | Reach Us, Email, Map Integration |
| **Digital Loan**      | Digital Loan Details & Apply     |
| **Microfinance Loan** | Microfinance Details             |
| **Unsecured Loan**    | Business Unsecured Loan          |
| **Secured Loan**      | Business Secured Loan            |
| **Splash Screen**     | Branded Smooth Animation         |

---

### 📲 How to Run Locally (Android Only)

```bash
# Clone this repo
git clone https://github.com/YOUR_GITHUB/JunoonCapitalApp.git

# Install dependencies
npm install

# Android Setup
cd android
./gradlew clean
cd ..

# Start Metro
npx react-native start

# Run on Android
npx react-native run-android
```

---

### 📀 Type Safety (Example)

```ts
export type imageData = {
    imgUri: string;
};
export const imageData: imageData[] = [
    { imgUri: 'https://drive.google.com/uc?export=view&id=...' }
];
```

---

### Testable APK
📱 **[Junoon.apk](https://drive.google.com/file/d/1vPmHSiWOqhBI6aqk8Vu_w2NlxTX5s7Bs/view?usp=sharing)**

* Also you can download the app from /apk/googleDriveLink.txt
---
### 📞 Contact

📧 **[info@junooncapital.com](mailto:info@junooncapital.com)**
📱 **+91 9311 343 335**

---

### © 2025 Junoon Capital Services Pvt Ltd.

*All rights reserved.*
