import { useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './Product.module.scss'

const ProductList = () => {
  const gamesData = useSelector(({ products: { games } }) => games)

  return (
    <section className="product-list">
      <div className={styles.productListWrapp}>
        {gamesData?.length
          ? gamesData.map(game => (
              // eslint-disable-next-line react/jsx-indent
              <ProductCard key={game.id} productData={game} />
            ))
          : 'loading ... '}
      </div>
    </section>
  )
}

export default ProductList
