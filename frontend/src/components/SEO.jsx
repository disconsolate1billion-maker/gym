import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component - Updates meta tags dynamically for each page
 * Improves search engine rankings and social sharing
 */
const SEO = ({ 
  title = 'APEX Wrestling', 
  description = 'Premium compression gear designed by NCAA wrestlers, for combat athletes.',
  image = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
  type = 'website',
  product = null
}) => {
  const location = useLocation();
  const baseUrl = 'https://apexwrestling.com';
  const fullUrl = `${baseUrl}${location.pathname}`;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  useEffect(() => {
    // Update title
    document.title = title.includes('APEX') ? title : `${title} | APEX Wrestling`;
    
    // Helper to update or create meta tag
    const updateMeta = (property, content, isName = false) => {
      const attr = isName ? 'name' : 'property';
      let meta = document.querySelector(`meta[${attr}="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Update SEO meta tags
    updateMeta('description', description, true);
    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:image', fullImage);
    updateMeta('og:url', fullUrl);
    updateMeta('og:type', type);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', fullImage);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
    
    // Add product structured data if product page
    if (product) {
      let script = document.querySelector('script[data-product-schema]');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-product-schema', 'true');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": product.image,
        "description": product.description,
        "brand": {
          "@type": "Brand",
          "name": "APEX Wrestling"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": product.price,
          "availability": product.inStock 
            ? "https://schema.org/InStock" 
            : "https://schema.org/PreOrder"
        }
      });
    }
    
    // Cleanup
    return () => {
      const productScript = document.querySelector('script[data-product-schema]');
      if (productScript) productScript.remove();
    };
  }, [title, description, fullImage, fullUrl, type, product]);
  
  return null; // This component doesn't render anything
};

// Pre-configured SEO for common pages
export const PageSEO = {
  home: () => (
    <SEO 
      title="APEX Wrestling - Elite Compression Gear for Combat Athletes | Forged in the Fire"
      description="Premium compression gear designed by NCAA wrestlers, for combat athletes. Built to endure grueling practices and dominate on the mat."
    />
  ),
  
  products: () => (
    <SEO 
      title="Shop Collection - Compression Gear | APEX Wrestling"
      description="Browse our collection of elite compression shirts and wrestling shorts. Engineered for combat athletes with battle-tested durability."
      image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
    />
  ),
  
  about: () => (
    <SEO 
      title="About APEX - Forged by Wrestlers, for Combat Athletes"
      description="APEX Wrestling was founded by NCAA wrestlers who understand what combat athletes need. Our mission is to create battle-tested gear."
    />
  ),
  
  cart: () => (
    <SEO 
      title="Your Cart | APEX Wrestling"
      description="Review your APEX Wrestling cart and checkout. Free shipping on orders over $100."
    />
  ),
  
  checkout: () => (
    <SEO 
      title="Checkout | APEX Wrestling"
      description="Complete your APEX Wrestling order. Secure checkout with multiple payment options."
    />
  ),
  
  product: (product) => (
    <SEO 
      title={`${product.name} - ${product.color} | APEX Wrestling`}
      description={`${product.name} in ${product.color}. ${product.description || 'Elite compression gear for combat athletes.'}`}
      image={product.image}
      type="product"
      product={{
        name: product.name,
        image: product.image,
        description: product.description,
        price: product.price,
        inStock: product.inStock
      }}
    />
  )
};

export default SEO;
