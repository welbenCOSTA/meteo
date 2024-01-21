import { type ReactNode } from 'react';
import { LayoutConainer } from './styles';

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return <LayoutConainer>{children}</LayoutConainer>;
}
