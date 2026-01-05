import Image from "next/image";
import Style from "./categories.module.css"

const CATEGORIES = [
  { id: 1, name: "Textiles & Apparel", image: "/textiles.jpg" },
  { id: 2, name: "Leather Goods", image: "/leather.jpg" },
  { id: 3, name: "Handicraft & Decor", image: "/handicraft.jpg" },
  { id: 4, name: "Furniture & Wood", image: "/furniture.jpg" },
  { id: 5, name: "Metal & Stone Art", image: "/stone.jpg" },
  { id: 6, name: "Organic Spices", image: "/spices.jpg" },
  // { id: 7, name: "Processed Foods", image: "/vedant-globals/public/textiles.jpg" },
  { id: 9, name: "Wellness & Ayurveda", image: "/ayurvedic.jpg" },
  { id: 10, name: "Fashion Jewelry", image: "/jewelery.jpg" },
];

export function Categories() {
  return (
    <section className={Style.categoryContainer}>
      <h2>Our Product Categories</h2>
          

      <div className={Style.categoryGrid}>
        {CATEGORIES.map((item)=>(
          <div key={item.id} className={Style.card}>
              <div className={Style.imageWrap}>
                <Image
                 src={item.image}
                 alt={item.name}
                 fill
                 sizes="(max-width: 768px) 50vw, 250px"
                 priority={item.id <= 4}
                />
               

              </div>
            <span className={Style.cardName}>{item.name}</span>
            </div>
        ))}
      </div>
           
           
    </section>
  )
}