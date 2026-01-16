// Mock data for APEX landing page - Wrestling/Combat Training Gear

export const brandContent = {
  tagline: "Forged in the Fire",
  heroTitle: "APEX",
  heroSubtitle: "Elite compression gear engineered for wrestlers and combat athletes. Built to endure grueling practices, make weight, and dominate on the mat—designed by former wrestlers who know what it takes.",
  launchNote: "Drop 01 is live."
};

// Pricing structure
export const pricing = {
  shirt: 55,
  shorts: 65,
  trainingSetBundle: 89, // Shirt + Shorts bundle price
  discounts: {
    twoShirts: 0.20,    // 20% off when buying 2 shirts
    threeShirts: 0.35,  // 35% off when buying 3+ shirts
  }
};

// Hero product (single compression shirt for hero section)
export const heroProduct = {
  id: 1,
  name: "Compression Shirt",
  color: "Black / Red",
  // Using external images for hero
  image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
  backImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
};

// All shirt variants (4 styles)
export const shirts = [
  {
    id: 1,
    name: "Compression Shirt",
    category: "Compression",
    variant: "Black / Red",
    color: "Black",
    logoColor: "Red",
    hex: "#DC2626",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    backImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    price: 55,
    originalPrice: 75,
    sizes: ["XS", "S", "M", "L", "XL"],
    status: "available",
    soldCount: 892,
    mostPopular: true
  },
  {
    id: 2,
    name: "Compression Shirt",
    category: "Compression",
    variant: "Black / Gold",
    color: "Black",
    logoColor: "Gold",
    hex: "#D4AF37",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    backImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    price: 55,
    originalPrice: 75,
    sizes: ["XS", "S", "M", "L", "XL"],
    status: "available",
    soldCount: 654
  },
  {
    id: 3,
    name: "Compression Shirt",
    category: "Compression",
    variant: "Red / Black",
    color: "Red",
    logoColor: "Black",
    hex: "#1a1a1a",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80",
    backImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80",
    price: 55,
    originalPrice: 75,
    sizes: ["XS", "S", "M", "L", "XL"],
    status: "available",
    soldCount: 445
  },
  {
    id: 4,
    name: "Compression Shirt",
    category: "Compression",
    variant: "White / Red",
    color: "White",
    logoColor: "Red",
    hex: "#DC2626",
    image: "https://images.unsplash.com/photo-1618886614638-80e3c103d2dc?w=600&q=80",
    backImage: "https://images.unsplash.com/photo-1618886614638-80e3c103d2dc?w=600&q=80",
    price: 55,
    originalPrice: 75,
    sizes: ["XS", "S", "M", "L", "XL"],
    status: "available",
    soldCount: 312
  }
];

// Shorts variants (2 styles with Men's/Women's option)
export const shorts = [
  {
    id: 5,
    name: "Wrestling Shorts",
    category: "Shorts",
    variant: "Black / Red",
    color: "Black",
    logoColor: "Red",
    hex: "#DC2626",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80",
    backImage: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80",
    price: 65,
    originalPrice: 85,
    mensSizes: ["S", "M", "L", "XL"],
    womensSizes: ["XS", "S", "M", "L"],
    sizes: ["S", "M", "L", "XL"],
    status: "available",
    soldCount: 567,
    mostPopular: true
  },
  {
    id: 6,
    name: "Wrestling Shorts",
    category: "Shorts",
    variant: "Black / Gold",
    color: "Black",
    logoColor: "Gold",
    hex: "#D4AF37",
    image: "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?w=600&q=80",
    backImage: "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?w=600&q=80",
    price: 65,
    originalPrice: 85,
    mensSizes: ["S", "M", "L", "XL"],
    womensSizes: ["XS", "S", "M", "L"],
    sizes: ["S", "M", "L", "XL"],
    status: "available",
    soldCount: 234
  }
];

// For backwards compatibility
export const mensShorts = shorts;
export const womensShorts = shorts;

// Combined products array for compatibility
export const products = [...shirts, ...shorts];

// Bundle configuration
export const bundles = [
  {
    id: "training-set",
    name: "APEX Training Set",
    description: "Compression Shirt + Wrestling Shorts — built to perform together",
    bundlePrice: 89,
    originalBundlePrice: 120,
    savings: 31,
    savingsText: "Save $31"
  }
];

export const features = [
  {
    id: 1,
    title: "Battle-Tested Durability",
    description: "Reinforced seams and abrasion-resistant fabric built to survive thousands of hours on the mat.",
    icon: "activity"
  },
  {
    id: 2,
    title: "Competition Cut",
    description: "Streamlined fit that stays in place during takedowns, scrambles, and intense grappling sessions.",
    icon: "minimize-2"
  },
  {
    id: 3,
    title: "Wrestling Heritage",
    description: "Designed by former NCAA wrestlers who understand the demands of the sport at every level.",
    icon: "target"
  },
  {
    id: 4,
    title: "Weight-Cut Ready",
    description: "Moisture-wicking technology that helps you maintain focus and performance during intense training.",
    icon: "globe"
  }
];

export const socialLinks = {
  instagram: "https://www.instagram.com/apex_wrestling/",
  tiktok: "https://www.tiktok.com/@apexwrestling",
  twitter: "https://x.com/apexwrestling",
  youtube: "https://www.youtube.com/@apexwrestling",
  email: "support@apexwrestling.com"
};
