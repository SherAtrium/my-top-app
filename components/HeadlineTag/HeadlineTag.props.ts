import { ReactNode } from 'react';

export interface HeadlineTagProps {
  children: ReactNode;
  tag: 'h1' | 'h2' | 'h3';
}
