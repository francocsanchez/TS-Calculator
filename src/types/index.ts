export type MenuItems = {
  id: number;
  name: string;
  price: number;
};

export type OrderItem = MenuItems & {
  quantity: number;
};

export type TypeTips = {
  id: string;
  value: number;
  label: string;
};
