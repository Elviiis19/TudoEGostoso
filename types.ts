export type CategoryId = 'economia' | 'emergencia' | 'rapida' | 'zero-waste' | 'airfryer';

export type View = 'home' | 'recipe' | 'terms' | 'privacy' | 'about' | 'cookies' | 'contact' | 'smart-chef';

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
  iconName: string;
}

export interface Ingredient {
  item: string;
  amount: number | string;
  unit: string;
  substitution?: string;
}

export interface NutritionInfo {
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string; // Added fiber
}

export interface StorageInfo {
  text: string;
  shelfLife: string;
  freezer: string; // Specific freezer instructions
}

// New Interfaces for Rich Content
export interface PerformanceMetrics {
  costPerServing: number;
  economyComparison: string; // e.g., "70% mais barato que fast-food"
  activeTime: number; // minutes hands-on
  waitTime: number; // minutes cooking/resting
}

export interface SubstitutionGuide {
  main?: { original: string; replace: string; note?: string };
  fat?: { original: string; replace: string };
  dietary?: { label: string; instruction: string }; // e.g., "Vegano"
}

export interface Equipment {
  mandatory: string[];
  alternativeAppliance?: {
    name: string; // e.g., "Forno Convencional"
    instructions: string[]; // How to do it in the oven instead
  };
}

export interface Troubleshooting {
  problem: string; // e.g., "O frango ficou seco"
  solution: string; // e.g., "Você cozinhou demais ou não marinou"
}

export interface FoodSafety {
  prep: string[]; // e.g., "Lave bem as cascas"
  conservation: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  time: number;
  prepTime: number;
  cookTime: number;
  cost: number;
  servings: number;
  imageUrl: string;
  categoryIds: CategoryId[];
  rating: number;
  ratingCount: number;
  author: string;
  publishedDate: string;
  
  ingredients: Ingredient[];
  instructions: {
    text: string;
    tip?: string;
  }[];
  
  economyTip?: string;
  
  // Enhanced Sections
  nutrition?: NutritionInfo;
  storage?: StorageInfo;
  pairing?: string[];
  
  // New Rich Data Blocks
  performance?: PerformanceMetrics;
  substitutions?: SubstitutionGuide;
  equipment?: Equipment;
  troubleshooting?: Troubleshooting[];
  foodSafety?: FoodSafety;
  faq?: FAQItem[];
}