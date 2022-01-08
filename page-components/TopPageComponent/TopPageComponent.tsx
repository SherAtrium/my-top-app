import { Tag } from '../../components/Tag/Tag';
import { TopPageComponentProps } from './TopPageComponent.props';
import { HeadlineTag } from '../../components/HeadlineTag/HeadlineTag';

import Styles from './TopPageComponent.module.css';
import { Card } from '../../components/Card/Card';
import { HhData } from '../../components/HhData/HhData';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.title}>
        <HeadlineTag tag='h1'>{page.title}</HeadlineTag>
        {products && (
          <Tag color='gray' size='m'>
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>

      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>

      <div className={Styles.hhTitle}>
        <HeadlineTag tag='h2'>Вакансии - {page.category}</HeadlineTag>
        {products && (
          <Tag color='red' size='m'>
            hh.ru
          </Tag>
        )}
      </div>

      <HhData {...page.hh} />
    </div>
  );
};
