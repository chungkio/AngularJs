type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  
  const productsList: Product[] = [
    { id: 1, name: "Product A", price: 50, quantity: 2 },
    { id: 2, name: "Product B", price: 120, quantity: 1 },
    { id: 3, name: "Product C", price: 80, quantity: 3 },
    { id: 4, name: "Product D", price: 90, quantity: 2 },
    { id: 5, name: "Product E", price: 110, quantity: 1 },
  ];
  
  // Tính tổng giá trị (price * quantity) của tất cả sản phẩm
  const totalValue: number = productsList.reduce((acc, product) => acc + product.price * product.quantity, 0);
  console.log("Tổng giá trị của tất cả sản phẩm:", totalValue);
  
  // Lọc ra các sản phẩm có giá lớn hơn 100
  const expensiveProducts: Product[] = productsList.filter(product => product.price > 100);
  console.log("Các sản phẩm có giá lớn hơn 100:", expensiveProducts);
  
  // Tạo mảng mới chứa đoạn mô tả
  const productDescriptions: string[] = productsList.map(product => `Sản phẩm ${product.name} có giá ${product.price}$ và còn ${product.quantity} sản phẩm.`);
  console.log("Mô tả sản phẩm:", productDescriptions);
  
  // Tính tổng số lượng của các sản phẩm có giá dưới 100
  const totalQuantityUnder100: number = productsList.reduce((acc, product) => {
    return product.price < 100 ? acc + product.quantity : acc;
  }, 0);
  console.log("Tổng số lượng của sản phẩm có giá dưới 100:", totalQuantityUnder100);
  
  // Hàm để tính giảm giá cho danh sách sản phẩm
  const getDiscountedProducts = (products: Product[], discountRate: number): Product[] => {
    return products.map(product => {
      const discountedPrice: number = product.price * (1 - discountRate);
      return { ...product, price: discountedPrice };
    });
  };
  
  // Sử dụng hàm getDiscountedProducts để lấy danh sách sản phẩm mới có giảm giá 10%
  const discountedProducts: Product[] = getDiscountedProducts(productsList, 0.1);
  console.log("Danh sách sản phẩm có giảm giá 10%:", discountedProducts);
  