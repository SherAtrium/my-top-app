import { ProductProps } from './Product.props';
import { Tag } from '../Tag/Tag';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';

import Styles from './Product.module.css';
import { Button } from '../Button/Button';

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
      <div className={Styles.hr}>
        <hr />
      </div>
      <div className={Styles.description}>{product.description}</div>
      <div className={Styles.feature}>фичи</div>
      <div className={Styles.advBlock}>
        <div className={Styles.advantages}>
          <div>Преимущество</div>
          <div>{product.advantages}</div>
        </div>
        <div className={Styles.disAdvantages}>
          <div>Недостатки</div>
          <div>{product.disAdvantages}</div>
        </div>
      </div>
      <div className={Styles.hr}>
        <hr />
      </div>
      <div className={Styles.actions}>
        <Button appearance='primary'>Узнать подробнее</Button>
        <Button appearance='ghost' arrow='right'>
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};
