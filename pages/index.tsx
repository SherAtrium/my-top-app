import { useState } from 'react';

import { Tag } from '../components/Tag/Tag';
import { Button } from '../components/Button/Button';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { HeadlineTag } from '../components/HeadlineTag/HeadlineTag';
import { Rating } from '../components/Rating/Rating';

export default function Home(): JSX.Element {
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

      <Rating rating={4} />
    </>
  );
}
