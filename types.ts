
export interface LegalCase {
  id: number;
  caseName: string;
  caseNumber: string;
  status: 'Active' | 'Closed' | 'Appealed';
  summary: string;
  fullText: string; // This would be the full document text in a real app
}

export interface GeneratedDocument {
  title: string;
  content: string;
}

// FIX: Add CartItem interface to resolve compilation error in components/Cart.tsx
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
