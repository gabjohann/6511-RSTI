const mockProducts = [
  {
    id: 1,
    category: "Desktop PC",
    title: "PC Home Pichau HM710",
    thumbnail:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREkhHj0mBK4I0S6W2JjiixjPoOX4X4IBCzM0286ssVCUyZiUIoX39E4I6kQzCRX8pY8rRSEzKuN71Akb7-0nJj3Mh2shuQ_2AetB1mDynJ4ZEtfe1C6q3EkV8tp-AmfFhw0qO5Sg&usqp=CAc",
    rating: "4.5",
    reviews: 4,
    price: "R$ 1.031,14",
  },
  {
    id: 2,
    category: "Desktop PC",
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One",
    thumbnail:
      "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: 4,
    price: "R$499.00",
  },
  {
    id: 3,
    category: "Networking Device",
    title: "TP-Link Archer AX11000 Tri-Band Wi-Fi Router",
    thumbnail:
      "https://images.unsplash.com/photo-1583508915901-b5f4d94aab9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    reviews: 12,
    price: "R$299.99",
  },
  {
    id: 4,
    category: "Printers & Scanners",
    title: "Canon PIXMA G7020 Wireless Printer",
    thumbnail:
      "https://images.unsplash.com/photo-1600180758895-cf03c5cc6c12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 3,
    reviews: 7,
    price: "R$199.00",
  },
  {
    id: 5,
    category: "PC Parts",
    title: "Corsair Vengeance LPX 16GB DDR4 RAM",
    thumbnail:
      "https://images.unsplash.com/photo-1555618467-3638f3b9c9c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: 15,
    price: "R$89.99",
  },
  {
    id: 6,
    category: "All Other Products",
    title: "Logitech MX Master 3 Advanced Wireless Mouse",
    thumbnail:
      "https://images.unsplash.com/photo-1604152135912-04a52962f98a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    reviews: 25,
    price: "R$99.99",
  },
  {
    id: 7,
    category: "Repairs",
    title: "Screen Replacement Service for iPhone 12",
    thumbnail:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: 8,
    price: "R$129.99",
  },
  {
    id: 8,
    category: "Laptops",
    title: "Apple MacBook Air M2 13.6-Inch",
    thumbnail:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    reviews: 30,
    price: "R$1,099.00",
  },
];
