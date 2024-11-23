
## Loyihani O'rnatish

Loyihani o'rnatish uchun quyidagi qadamlarni bajaring:

1. **Repositoriyeni klonlash:**
   ```bash
   git clone https://github.com/user/repository-name.git
Kerakli paketlarni o'rnatish:


cd food-deliveir,
npm install,
Loyihani ishga tushirish:
npm run dev,
Brauzerda loyihani ko'rish uchun: http://localhost:5173

Ishlatilgan Texnologiyalar
Loyihada quyidagi texnologiyalar ishlatilgan:

Frontend:
React
TypeScript
Material UI
React Query
Zustand
Axios
API Documentation
GET /product
Bu endpoint barcha mahsulotlarni olish uchun ishlatiladi. Response quyidagicha bo'ladi:

=
[
   {
        "id": 1,
        "name": "Cheese Burger",
        "price": "55000",
        "category": "Fast Food",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1k6uuN7ezJwvc1fQ2amqXsPnallnsKrnL4g&s",
        "description": "A classic cheese burger with fresh ingredients."
    }
]
GET /category
Bu endpoint mavjud kategoriya turlarini qaytaradi. Response quyidagicha bo'ladi:

j
["Fast Food","Italian Cuisine","Vegetarian"]
POST /order
Bu endpoint yangi buyurtma yaratadi. Body parametrlari:

json
Копировать код
{
    "id": 2,
    "address": "asdasd",
    "phone": "54646546",
    "paymentType": "card",
    "comment": "sadad",
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

## Screenshot



## Screenshotlar

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










