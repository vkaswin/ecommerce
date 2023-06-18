export interface ICart {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  discountPrice: number;
  brand: string;
  category: string;
  thumbnail: string;
  quantity: number;
}

export type IQuantityAction = "increase" | "decrease";
