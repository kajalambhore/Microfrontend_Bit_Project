import React from 'react';
import classNames from 'classnames';
import { Img, ImgProps } from '@learn-bit-react/base-ui.ui.img';
import {
  LogoText,
  LogoTextProps,
} from '@learn-bit-react/ecommerce.ui.logo-text';
import { Nav } from '@learn-bit-react/base-ui.ui.nav';
import { ThemeToggler } from '@learn-bit-react/base-ui.ui.theme-toggler';

import { Link } from '@learn-bit-react/base-ui.ui.link';
import { UserAvatar } from '@teambit/design.ui.avatar';
import { largeTheme } from '@learn-bit-react/base-ui.themes.large-theme';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import styles from './ui_header.module.scss';

export type UiHeaderProps = {} & React.HTMLAttributes<HTMLElement>;
const accounts = {
  defAccount: {
    name: 'defaultAccount',
    type: 'default',
    profileImage: 'https://static.bit.dev/harmony/support.svg',
  },
  noPicOrgAccount: { name: 'defaultAccount', type: 'organization' },
};

export function UiHeader({
  className,
  alt,
  src,
  logoText,
  children,
}: UiHeaderProps & ImgProps & LogoTextProps) {
  return (
    <>
      <header className={classNames(styles.header, className)}>
        <div className={classNames(styles.logo, className)}>
          <Link href="/">
            <Img src={src} alt={alt} />
          </Link>
          <LogoText
            className={classNames(styles.logoText, className)}
            logoText={logoText}
          />
        </div>
        <Nav className={classNames(styles.nav, className)}>{children}</Nav>
        <div>
          <ThemeToggler />

          <UserAvatar
            size={32}
            account={accounts.noPicOrgAccount}
            className={styles.avatar}
          />

 
        </div>
      </header>
    </>
  );
}
