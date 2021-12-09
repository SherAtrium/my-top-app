import { Button } from '../components/Button/Button';
import { HeadlineTag } from '../components/HeadlineTag/HeadlineTag';

export default function Home(): JSX.Element {
  return (
    <>
      <HeadlineTag tag='h1'>Текст</HeadlineTag>
      <Button appearance='primary'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
    </>
  );
}
