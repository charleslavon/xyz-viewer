import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';

import { useAuthStore } from '@/stores/auth';

import { CurrentComponent } from '../CurrentComponent';
import { navLinkData } from '../org-links';

const Wrapper = styled.div`
  .NavigationMenuRoot {
    display: flex;
    align-items: center;
  }

  .NavigationMenuList {
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 4px;
    border-radius: 6px;
    list-style: none;
    margin: 0;
  }

  .NavigationMenuTrigger,
  .NavigationMenuLink {
    all: unset;
    padding: 8px 14px;
    outline: none;
    user-select: none;
    font-weight: 600;
    line-height: 1;
    border-radius: 4px;
    font-size: 14px;
    color: #1b1b18;
  }
  .NavigationMenuTrigger:focus,
  .NavigationMenuLink:focus {
    color: #6d62d4;
  }
  .NavigationMenuTrigger:hover,
  .NavigationMenuLink:hover {
    color: #6d62d4;
  }

  .NavigationMenuTrigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;
  }

  .NavigationMenuLink {
    display: block;
    text-decoration: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 600;
  }

  .NavigationMenuContent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    animation-duration: 250ms;
    animation-timing-function: ease;
  }

  .NavigationMenuContent .current-component {
    margin: 10px 0 10px 10px;
  }

  .develop {
    display: flex;
  }

  .develop div {
    flex: 1;
  }

  .develop .one {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .NavigationMenuContent[data-motion='from-start'] {
    animation-name: enterFromLeft;
  }
  .NavigationMenuContent[data-motion='from-end'] {
    animation-name: enterFromRight;
  }
  .NavigationMenuContent[data-motion='to-start'] {
    animation-name: exitToLeft;
  }
  .NavigationMenuContent[data-motion='to-end'] {
    animation-name: exitToRight;
  }
  @media only screen and (min-width: 600px) {
    .NavigationMenuContent {
      width: auto;
    }
  }

  .NavigationMenuIndicator {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 10px;
    top: 100%;
    overflow: hidden;
    z-index: 1;
    transition: width, transform 250ms ease;
  }
  .NavigationMenuIndicator[data-state='visible'] {
    animation: fadeIn 200ms ease;
  }
  .NavigationMenuIndicator[data-state='hidden'] {
    animation: fadeOut 200ms ease;
  }

  .NavigationMenuViewport {
    position: relative;
    transform-origin: top center;
    margin-top: 10px;
    width: 100%;
    background-color: white;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.06);
    height: var(--radix-navigation-menu-viewport-height);
    transition: width, height, 300ms ease;
  }
  .NavigationMenuViewport[data-state='open'] {
    animation: scaleIn 200ms ease;
  }
  .NavigationMenuViewport[data-state='closed'] {
    animation: scaleOut 200ms ease;
  }
  @media only screen and (min-width: 600px) {
    .NavigationMenuViewport {
      width: var(--radix-navigation-menu-viewport-width);
    }
  }

  .List {
    display: grid;
    padding: 22px;
    margin: 0;
    column-gap: 10px;
    list-style: none;
  }
  @media only screen and (min-width: 600px) {
    .List.one {
      width: 500px;
      grid-template-columns: 0.75fr 1fr;
    }
    .List.two {
      width: 400px;
      grid-auto-flow: column;
      grid-template-rows: repeat(3, 1fr);
    }
  }

  .ListItemLink {
    display: block;
    outline: none;
    text-decoration: none;
    user-select: none;
    padding: 16px 8px 4px 8px;
    padding-left: 55px;
    border-radius: 6px;
    font-size: 15px;
    line-height: 1;
    position: relative;
  }
  .ListItemLink i {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    font-size: 22px;
    color: #706f6c;
  }

  .ListItemLink:hover {
    text-decoration: none;
    background-color: #f3f3f2;
  }

  .ListItemHeading {
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 5px;
    color: #1b1b18;
  }

  .ListItemText {
    line-height: 1.4;
    font-weight: initial;
    color: #868682;
  }

  .Callout {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    padding: 25px;
    text-decoration: none;
    outline: none;
    user-select: none;
  }

  .CalloutHeading {
    color: white;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 16px;
    margin-bottom: 7px;
  }

  .CalloutText {
    font-size: 14px;
    line-height: 1.3;
  }

  .ViewportPosition {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 100%;
    left: 0;
    perspective: 2000px;
  }

  @keyframes enterFromRight {
    from {
      opacity: 0;
      transform: translateX(200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes enterFromLeft {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes exitToRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(200px);
    }
  }

  @keyframes exitToLeft {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-200px);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: rotateX(-30deg) scale(0.9);
    }
    to {
      opacity: 1;
      transform: rotateX(0deg) scale(1);
    }
  }

  @keyframes scaleOut {
    from {
      opacity: 1;
      transform: rotateX(0deg) scale(1);
    }
    to {
      opacity: 0;
      transform: rotateX(-10deg) scale(0.95);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const ListItem = forwardRef<
  HTMLAnchorElement,
  { className?: string; children: ReactNode; title: string; route?: string; href?: string }
>(({ className, children, title, ...props }, forwardedRef) => {
  if (props.route) {
    return (
      <li>
        <NavigationMenu.Link asChild>
          <Link href={props.route} className={classNames('ListItemLink', className)}>
            <div className="ListItemHeading">{title}</div>
            <p className="ListItemText">{children}</p>
          </Link>
        </NavigationMenu.Link>
      </li>
    );
  } else {
    return (
      <li>
        <NavigationMenu.Link asChild>
          <a
            className={classNames('ListItemLink', className)}
            {...props}
            ref={forwardedRef}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ListItemHeading">{title}</div>
            <p className="ListItemText">{children}</p>
          </a>
        </NavigationMenu.Link>
      </li>
    );
  }
});
ListItem.displayName = 'ListItem';

export const MainNavigationMenu = () => {
  const signedIn = useAuthStore((store) => store.signedIn);

  return (
    <Wrapper>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          </NavigationMenu.List>
        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
    </Wrapper>
  );
};
