import { Button } from '../components/Button/Button';
import { HeadlineTag } from '../components/HeadlineTag/HeadlineTag';
import { Paragraph } from '../components/Paragraph/Paragraph';

export default function Home(): JSX.Element {
  return (
    <>
      <HeadlineTag tag='h1'>Текст</HeadlineTag>
      <Button appearance='primary' arrow='right'>
        Кнопка
      </Button>
      <Button appearance='ghost' arrow='right'>
        Кнопка
      </Button>
      <Paragraph size='l'>Большой</Paragraph>
      <Paragraph>Средний</Paragraph>
      <Paragraph size='s'>Маленький</Paragraph>
    </>
  );
}
