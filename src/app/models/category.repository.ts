import { Category } from "./category";

export class CategoryRepository{
  private categories: Category[] = [
    { id: 1, name: "Mercedes - Benz" },
    { id: 2, name: "Audi" },
    { id: 3, name: "Bmw" },
    { id: 4, name: "Skoda"}
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number) {
    return this.categories.find(c => c.id == id);
  }
}
