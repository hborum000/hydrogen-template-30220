export default function Index() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="/">
          Hydrogen
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#collection">Collection</a>
          <a href="#story">Story</a>
          <a href="#newsletter">Newsletter</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Spring / Summer 2026</p>
            <h1>Modern storefront design with room to grow.</h1>
            <p className="hero-text">
              A clean homepage layout for a Remix storefront, built to showcase
              new arrivals, brand positioning, and quick customer actions
              without feeling generic.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#collection">
                Shop New In
              </a>
              <a className="button button-secondary" href="#story">
                Read the Story
              </a>
            </div>
          </div>

          <div className="hero-card">
            <p className="card-label">Featured Drop</p>
            <h2>Utility pieces for warmer days.</h2>
            <p>
              Lightweight layers, sharp lines, and understated textures for
              everyday wear.
            </p>
            <div className="hero-stats">
              <div>
                <span>24</span>
                <p>new arrivals</p>
              </div>
              <div>
                <span>3</span>
                <p>signature sets</p>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-grid" id="collection">
          <article className="feature feature-large">
            <p className="feature-kicker">New collection</p>
            <h3>Designed for a fast first impression.</h3>
            <p>
              Use this area for campaign messaging, a product spotlight, or a
              featured collection with a strong visual anchor.
            </p>
          </article>

          <article className="feature">
            <p className="feature-kicker">Fast setup</p>
            <h3>Simple content blocks</h3>
            <p>
              Swap these cards for product categories, promotions, or trust
              signals.
            </p>
          </article>

          <article className="feature">
            <p className="feature-kicker">Built to evolve</p>
            <h3>Ready for real data</h3>
            <p>
              Each section can be wired into product, collection, or CMS data
              once the app grows.
            </p>
          </article>
        </section>

        <section className="story-section" id="story">
          <div className="story-copy">
            <p className="eyebrow">Why this layout works</p>
            <h2>
              Strong hierarchy, clear paths, and enough personality to avoid
              template fatigue.
            </h2>
          </div>
          <div className="story-points">
            <p>
              Large headline and concise supporting copy for immediate
              orientation.
            </p>
            <p>
              Multiple call-to-action styles so primary and secondary actions
              are distinct.
            </p>
            <p>
              Flexible card sections that can later become dynamic product and
              collection modules.
            </p>
          </div>
        </section>

        <section className="newsletter" id="newsletter">
          <div>
            <p className="eyebrow">Stay informed</p>
            <h2>Sign up for launch notes, product drops, and seasonal edits.</h2>
          </div>
          <form className="newsletter-form">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input id="email" type="email" placeholder="Email address" />
            <button type="submit">Join list</button>
          </form>
        </section>
      </main>
    </div>
  );
}
