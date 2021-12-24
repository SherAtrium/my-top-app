import axios from 'axios';
import { useState } from 'react';
import { GetStaticProps } from 'next';

import { Tag } from '../components/Tag/Tag';
import { withLayout } from '../layout/Layout';
import { Button } from '../components/Button/Button';
import { Rating } from '../components/Rating/Rating';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { HeadlineTag } from '../components/HeadlineTag/HeadlineTag';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <HeadlineTag tag='h1'>{counter}</HeadlineTag>

      <Button
        appearance='primary'
        arrow='right'
        onClick={() => setCounter((x) => x + 1)}
      >
        Кнопка
      </Button>

      <Button appearance='ghost' arrow='right'>
        Кнопка
      </Button>

      <Paragraph size='l'>Большой</Paragraph>
      <Paragraph>Средний</Paragraph>
      <Paragraph size='s'>Маленький</Paragraph>
      <Tag size='s'>Ghost</Tag>

      <Tag size='m' color='red'>
        Red
      </Tag>

      <Tag size='s' color='green'>
        Green
      </Tag>

      <Tag color='primary'>Green</Tag>

      <Rating rating={rating} setRating={setRating} isEditable />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
