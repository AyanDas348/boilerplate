import { styles } from "../styles"

function Hero() {
  return (
    <section className={`relative w-full h-96 mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>Hero</h1>
      </div>
    </section>
  )
}

export default Hero