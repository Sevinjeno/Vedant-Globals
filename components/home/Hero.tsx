import styles from './hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Global Sourcing Partner from India</h1>

      <p className={styles.description}>
        We connect international buyers with trusted Indian manufacturers
        for textile, handicraft, furniture, and lifestyle products.
      </p>

      <div className={styles.actions}>
        {/* We apply two classes: the base 'btn' and the specific color */}
        <button className={styles.primary}>
          Request a Quote
        </button>
        <button className={styles.secondary}>
          View Products
        </button>
      </div>
    </section>
  )
}