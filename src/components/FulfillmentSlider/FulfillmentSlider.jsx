import styles from './FulfillmentSlider.module.css'

function FulfillmentSlider({ value }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${value}%` }} />
      </div>
      <span className={styles.label}>{value}%</span>
    </div>
  )
}

export default FulfillmentSlider
