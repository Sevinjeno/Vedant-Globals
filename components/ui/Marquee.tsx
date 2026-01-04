import styles from "./marquee.module.css"

export function Marquee() {
  return (
    <section className={styles.marquee}>
      <div className={styles.track}>
        {items.concat(items).map((item, i) => (
          <div key={i} className={styles.item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}

const items = [
  "Textiles & Apparel",
  "Food Products",
  "Spices & Condiments",
  "Handicrafts",
  "Agricultural Commodities",
  "Bulk Exports",

  "Leather Goods",
  "Pharmaceutical Supplies",
  "Industrial Machinery",
  "Electrical Equipment",
  "Plastic & Polymer Products",
  "Chemicals & Intermediates",

  "Metal & Steel Products",
  "Auto Components",
  "Furniture & Wood Products",
  "Packaging Materials",
  "FMCG Private Labels",
  "Construction Materials",
]