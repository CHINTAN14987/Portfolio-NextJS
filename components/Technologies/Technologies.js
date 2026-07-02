import React from 'react'
import styles from "./Technologies.module.css"

const Technologies = () => {
  return (
    <div className={styles.container}>
      <div className={styles.techRow}>
        <h3 className={styles.techTitle}>Front-End</h3>
        <div className={styles.techContent}>
          <span className={styles.techMeta}>05 TOOLS</span>
          <div className={styles.techChips}>
            <span className={styles.chip}>React</span>
            <span className={styles.chip}>Next.js</span>
            <span className={styles.chip}>TypeScript</span>
            <span className={styles.chip}>React Native</span>
            <span className={styles.chip}>Redux Toolkit</span>
          </div>
        </div>
      </div>

      <div className={styles.techRow}>
        <h3 className={styles.techTitle}>Backend</h3>
        <div className={styles.techContent}>
          <span className={styles.techMeta}>07 TOOLS</span>
          <div className={styles.techChips}>
            <span className={styles.chip}>Node.js</span>
            <span className={styles.chip}>Express</span>
            <span className={styles.chip}>REST</span>
            <span className={styles.chip}>JWT</span>
            <span className={styles.chip}>Nginx</span>
            <span className={styles.chip}>Apache Solr</span>
            <span className={styles.chip}>BullMQ / Redis</span>
          </div>
        </div>
      </div>

      <div className={styles.techRow}>
        <h3 className={styles.techTitle}>Data</h3>
        <div className={styles.techContent}>
          <span className={styles.techMeta}>01 TOOL</span>
          <div className={styles.techChips}>
            <span className={styles.chip}>MongoDB</span>
          </div>
        </div>
      </div>

      <div className={styles.techRow}>
        <h3 className={styles.techTitle}>DevOps & Cloud</h3>
        <div className={styles.techContent}>
          <span className={styles.techMeta}>03 TOOLS</span>
          <div className={styles.techChips}>
            <span className={styles.chip}>Docker</span>
            <span className={styles.chip}>CI/CD</span>
            <span className={styles.chip}>AWS</span>
          </div>
        </div>
      </div>

      <div className={styles.techRow}>
        <h3 className={styles.techTitle}>Payments & Realtime</h3>
        <div className={styles.techContent}>
          <span className={styles.techMeta}>03 TOOLS</span>
          <div className={styles.techChips}>
            <span className={styles.chip}>Stripe Checkout</span>
            <span className={styles.chip}>Stripe Webhooks</span>
            <span className={styles.chip}>Server-Sent Events</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies