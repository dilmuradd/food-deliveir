# Food Delivery Project 🍔

Bu zamonaviy ovqat yetkazib berish web ilovasi React va TypeScript asosida qurilgan. Foydalanuvchilar ovqatlarni ko'rish, savatga qo'shish va buyurtma berish imkoniyatiga ega.

## 🚀 Xususiyatlari

- Mahsulotlarni kategoriyalar bo'yicha ko'rish
- Savatga qo'shish va miqdorni boshqarish
- Buyurtma berish jarayoni
- To'lov turini tanlash
- Yetkazib berish manzilini kiritish

## 🛠 Texnologiyalar

- **Frontend:**
  - React
  - TypeScript
  - Material UI
  - React Query
  - Zustand (State management)
  - React Hook Form
  - Axios

## ⚙️ O'rnatish

1. Repositoriyani klonlang:
```bash
git clone https://github.com/dilmuradd/food-deliveir
```

2. Loyiha papkasiga kiring:
```bash
cd food-deliveir
```

3. Kerakli paketlarni o'rnating:
```bash
npm install
```

4. Loyihani ishga tushiring:
```bash
npm run dev
```

5. Brauzerda `http://localhost:5173` manziliga kiring

## 📡 API Documentation

### GET /product
Barcha mahsulotlarni olish uchun endpoint.

Response:
```json
[
   {
        "id": 1,
        "name": "Cheese Burger",
        "price": "55000",
        "category": "Fast Food",
        "image": "https://example.com/image.jpg",
        "description": "A classic cheese burger with fresh ingredients."
    }
]
```

### GET /category
Mavjud kategoriyalarni olish uchun endpoint.

Response:
```json
["Fast Food", "Italian Cuisine", "Vegetarian"]
```

### POST /order
Yangi buyurtma yaratish uchun endpoint.

Request body:
```json
{
    "id": 2,
    "address": "Example Street 123",
    "phone": "998901234567",
    "paymentType": "card",
    "comment": "No onions please",
    "items": [
      {
        "productId": 10,
        "quantity": 7
      },
      {
        "productId": 1,
        "quantity": 11
      }
    ]
}
```

## 📸 Ilovadan namunalar

Ilova interfeysi quyidagi rasmlarda ko'rsatilgan:
### 1. Rasm 1
![Rasm 1](./src/assets/Screenshot_1.png)
### 2. Rasm 2
![Rasm 2](./src/assets/Снимок%20экрана%20(114).png)
### 3. Rasm 3
![Rasm 3](./src/assets/Снимок%20экрана%20(115).png)
### 4. Rasm 4
![Rasm 4](./src/assets/Снимок%20экрана%20(116).png)
### 5. Rasm 5
![Rasm 5](./src/assets/Снимок%20экрана%20(117).png)
### 6. Rasm 6
![Rasm 6](./src/assets/Снимок%20экрана%20(119).png)
### 7. Rasm 7
![Rasm 7](./src/assets/Снимок%20экрана%20(121).png)
### 8. Rasm 8
![Rasm 8](./src/assets/Снимок%20экрана%20(124).png)
### 9. Rasm 9
![Rasm 9](./src/assets/Снимок%20экрана%20(125).png)
### 10. Rasm 10
![Rasm 10](./src/assets/Снимок%20экрана%20(127).png)
