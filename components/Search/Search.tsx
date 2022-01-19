import { useState } from 'react';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { SearchProps } from './Search.props';

import SearchIcon from './Search.svg';
import Styles from './Search.module.css';
import { useRouter } from 'next/dist/client/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () =>
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });

  const handleKeyDown = (e: KeyboardEvent) => e.key === 'Enter' && goToSearch();

  return (
    <div className={cn(className, Styles.search)} {...props}>
      <Input
        value={search}
        placeholder='Поиск...'
        className={Styles.input}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance='primary'
        className={Styles.button}
        onClick={goToSearch}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
