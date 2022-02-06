import { ProductProps } from './Product.props';
import { Card } from '../Card/Card';
import cn from 'classnames';

import Styles from './Product.module.css';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';

export const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  return (
    <Card className={Styles.product}>
      <div className={Styles.logo}>
        <img
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
        />
      </div>
      <div className={Styles.title}>{product.title}</div>
      <div className={Styles.price}>{product.price}</div>
      <div className={Styles.credit}>{product.credit}</div>
      <div className={Styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={Styles.tags}>
        {product.categories.map((c) => (
          <Tag key={c} color='ghost'>
            {c}
          </Tag>
        ))}
      </div>
      <div className={Styles.priceTitle}>цена</div>
      <div className={Styles.creditTitle}>кредит</div>
      <div className={Styles.rateTitle}>{product.reviewCount} отзывов</div>
    </Card>
  );
};
