import { Tag } from '../../components/Tag/Tag';
import { Sort } from '../../components/Sort/Sort';
import { HhData } from '../../components/HhData/HhData';
import { TopPageComponentProps } from './TopPageComponent.props';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { Advantages } from '../../components/Advantages/Advantages';
import { HeadlineTag } from '../../components/HeadlineTag/HeadlineTag';

import Styles from './TopPageComponent.module.css';
import { SortEnum } from '../../components/Sort/Sort.props';
import { sortReducer } from './Sort.reducer';
import { useReducer } from 'react';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  const setSort = (sort: SortEnum) => dispatchSort({ type: sort });

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.title}>
        <HeadlineTag tag='h1'>{page.title}</HeadlineTag>
        {products && (
          <Tag color='gray' size='m'>
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>

      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>

      <div className={Styles.hhTitle}>
        <HeadlineTag tag='h2'>Вакансии - {page.category}</HeadlineTag>
        {products && (
          <Tag color='red' size='m'>
            hh.ru
          </Tag>
        )}
      </div>

      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}

      {page.advantages && page.advantages.length > 0 && (
        <>
          <HeadlineTag tag='h2'>Преимущество</HeadlineTag>
          <Advantages advantages={page.advantages} />
        </>
      )}

      {page.seoText && (
        <div
          className={Styles.seo}
          dangerouslySetInnerHTML={{
            __html: page.seoText,
          }}
        />
      )}

      <HeadlineTag tag='h2'>Получаемые навыки</HeadlineTag>

      {page.tags &&
        page.tags.map((t) => (
          <Tag key={t} color='primary'>
            {t}
          </Tag>
        ))}
    </div>
  );
};
