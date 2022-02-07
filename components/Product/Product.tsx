import { ProductProps } from './Product.props';
import { Tag } from '../Tag/Tag';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';

import Styles from './Product.module.css';
import { Button } from '../Button/Button';
import { priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';

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
      <div className={Styles.price}>
        {priceRu(product.price)}{' '}
        {product.oldPrice && (
          <Tag className={Styles.oldPrice} color='green'>
            {priceRu(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>
      <div className={Styles.credit}>
        {priceRu(product.credit)}/<span className={Styles.month}>мес</span>
      </div>
      <div className={Styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={Styles.tags}>
        {product.categories.map((c) => (
          <Tag key={c} color='ghost' className={Styles.category}>
            {c}
          </Tag>
        ))}
      </div>
      <div className={Styles.priceTitle}>цена</div>
      <div className={Styles.creditTitle}>кредит</div>
      <div className={Styles.rateTitle}>{product.reviewCount} отзывов</div>
      <Divider className={Styles.hr} />
      <div className={Styles.description}>{product.description}</div>
      <div className={Styles.feature}>фичи</div>
      <div className={Styles.advBlock}>
        {product.advantages && (
          <div className={Styles.advantages}>
            <div className={Styles.advTitle}>Преимущество</div>
            <div>{product.advantages}</div>
          </div>
        )}
        {product.disAdvantages && (
          <div className={Styles.disAdvantages}>
            <div className={Styles.disAdvTitle}>Недостатки</div>
            <div>{product.disAdvantages}</div>
          </div>
        )}
      </div>
      <Divider className={Styles.hr} />
      <div className={Styles.actions}>
        <Button appearance='primary'>Узнать подробнее</Button>
        <Button
          appearance='ghost'
          arrow='right'
          className={Styles.reviewButton}
        >
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};
