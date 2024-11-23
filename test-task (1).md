# Food Delivery Service - Test Task

## Vazifa tavsifi

Restorandan ovqat buyurtma qilish uchun oddiy web dastur yarating. Dastur quyidagi minimal funksionallikka ega bo'lishi kerak:

### 1. Mahsulotlar ro'yxati sahifasi

-   Mahsulotlar kartochkalar ko'rinishida bo'lishi kerak
-   Har bir kartochkada:
    -   Mahsulot rasmi (placeholder rasm ishlatish mumkin)
    -   Nomi
    -   Narxi
    -   Kategoriyasi
    -   Savatga qo'shish tugmasi
-   Mahsulotlarni kategoriyalar bo'yicha filterlash
-   Mahsulotlarni narx bo'yicha saralash
-   Mahsulotlarni qidirish

### 2. Savat

-   Savatga qo'shilgan mahsulotlar ro'yxati
-   Har bir mahsulot uchun:
    -   Miqdorini o'zgartirish
    -   O'chirish imkoniyati
-   Umumiy summani hisoblash

### 3. Buyurtma berish formasi

-   Yetkazib berish manzili
-   Telefon raqami
-   To'lov turi
-   Izoh qoldirish maydoni

## Texnik talablar

### Frontend stack

```typescript
// Required technologies
- React.js
- TypeScript
- React Query (API calls uchun)
- Material UI (UI components)
- React Hook Form (forma validatsiya)

// Optional
- Redux/Zustand (global state management)
- React Router (routing)
```

### API

```typescript
// Tayyor API endpoint'lar. API uchun https://mokky.dev/ shunga o'hshash mock API platformalardan foydalansangiz bo'ladi
GET /api/products - mahsulotlar ro'yxati
GET /api/categories - kategoriyalar ro'yxati
POST /api/orders - buyurtma yuborish

// Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

// Order interface
interface Order {
  address: string;
  phone: string;
  paymentType: 'cash' | 'card';
  items: Array<{
    productId: number;
    quantity: number;
  }>;
  comment?: string;
}
```

### Minimal UI dizayni

```typescript
// App structure
<Layout>
    <Header>
        <Logo />
        <Search />
        <CartButton />
    </Header>

    <Main>
        <Filters />
        <ProductList>
            <ProductCard />
        </ProductList>
    </Main>

    <Cart>
        <CartItems />
        <OrderForm />
    </Cart>
</Layout>
```

## Qo'shimcha talablar

### TypeScript

-   Interface'lar to'g'ri ishlatilishi
-   Type'lar to'g'ri berilishi
-   Generic'lardan foydalanish

### React Query

-   Loading holatlarini ko'rsatish
-   Error handling
-   Data keshlash

### Form validation

-   Telefon raqami formati
-   Manzil majburiy
-   To'lov turi majburiy

### UI/UX

-   Responsive design
-   Loading holatlar
-   Error holatlar
-   Empty states
-   Success/Error notifications

## Bonus vazifalar

-   Mahsulotlarni pagination qilish
-   Dark/Light theme
-   Mahsulot detallarini ko'rsatish
-   Order history
-   Buyurtma holatini kuzatish

## Code quality

-   Clean code prinsiplari
-   Component'larga to'g'ri ajratish
-   Props/Type'lar documentation
-   Error handling
-   Git commit'lar tarixi

## Topshirish formati

-   GitHub repository
-   README.md faylida:
    -   Loyihani o'rnatish instruksiyasi
    -   Ishlatilgan texnologiyalar
    -   API documentation
    -   Screenshot'lar
    