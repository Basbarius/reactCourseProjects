import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 1, 
    title: 'Sushi',
    price: 9, 
    description: "Sushi o Suchi como dice la Sofi"
  },
  {
    id: 2, 
    title: 'Boneless',
    price: 10, 
    description: "Boneless de Mochis"
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item => {
          return <ProductItem key={item.id} {...item} />
        })}
      </ul>
    </section>
  );
};

export default Products;
