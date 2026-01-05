import Style from "./footer.module.css"
export function Footer() {
  return (
    <footer className={Style.footer}>
      <div className={Style.footerContainer}>
        <div>
          <h4>Brand</h4>
          <p>Automation for modern teams.</p>
        </div>

       <div className={Style.footerCol}>
  <h5>Product</h5>
  <a>Features</a>
  <a>Pricing</a>
  <a>Integrations</a>
</div>

        <div className={Style.footerCol}>
          <h5>Company</h5>
          <a>About</a>
          <a>Blog</a>
          <a>Careers</a>
        </div>

        <div className={Style.footerCol}>
          <h5>Legal</h5>
          <a>Privacy</a>
          <a>Terms</a>
        </div>
      </div>
    </footer>
  )
}