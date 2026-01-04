import Style from "./categories.module.css"

const CATEGORIES = [
  { id: 1, name: "Textiles & Apparel" },
  { id: 2, name: "Leather Goods" },
  { id: 3, name: "Handicraft & Decor" },
  { id: 4, name: "Furniture & Wood" },
  { id: 5, name: "Metal & Stone Art" },
  { id: 6, name: "Organic Spices" },
  { id: 7, name: "Processed Foods" },
  { id: 8, name: "Eco-Friendly Jute" },
  { id: 9, name: "Wellness & Ayurveda" },
  { id: 10, name: "Fashion Jewelry" }
];

export function Categories() {
  return (
    <section>
      <h2>Our Product Categories</h2>

      <div className={Style.categoryGrid}>
        {CATEGORIES.map((item)=>(
          <div key={item.id} className={Style.card}>
            {/* We can add an icon placeholder here later */}
            <span className={Style.cardName}>{item.name}</span>
            </div>
        ))}
      </div>
    </section>
  )
}