import { css, SerializedStyles } from '@emotion/react';

/**
 * Consider scroll as obstructive
 * only when scrollbar reduce available space
 * (use native scrollbars when possible, ex. MacOS)
 */
const isObtrusiveScroll = (function validateScroll(): boolean {
  const container = document.createElement('div');
  container.setAttribute(
    'style',
    'width:30px;height:30px;overflow:auto;position:absolute;'
  );

  const content = document.createElement('div');
  content.setAttribute('style', 'width: 100%;height:40px');
  container.appendChild(content);

  document.body.appendChild(container);
  const isContentHidden = 30 - content.clientWidth > 0;
  document.body.removeChild(container);

  return isContentHidden;
})();

export function getScrollbarStyles(): SerializedStyles | '' {
  if (isObtrusiveScroll) {
    return css`
      scrollbar-width: var(--scrollbar-width);
      scrollbar-color: var(--scrollbar-color) var(--scrollbar-track-color);
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar;

      scroll-behavior: smooth;
      overscroll-behavior: contain;

      &::-webkit-scrollbar {
        height: var(--scrollbar-size);
        width: var(--scrollbar-size);
        border-radius: var(--scrollbar-border-radius);
      }

      &::-webkit-scrollbar-track {
        background-color: var(--scrollbar-track-color);
        border-radius: var(--scrollbar-border-radius);
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--scrollbar-color);
        border-radius: var(--scrollbar-border-radius);
      }

      &::-webkit-scrollbar-thumb:vertical {
        min-height: var(--scrollbar-minlength);
        border-radius: var(--scrollbar-border-radius);
      }

      &::-webkit-scrollbar-thumb:horizontal {
        min-width: var(--scrollbar-minlength);
        border-radius: var(--scrollbar-border-radius);
      }
    `;
  }
  return '';
}

export function getScrollbarCssVariables(
  isDarkMode?: boolean
): SerializedStyles {
  return css`
    :root {
      --scrollbar-track-color: transparent;
      --scrollbar-color: ${isDarkMode
        ? 'rgba(255, 255, 255, .2)'
        : 'rgba(0, 0, 0, .2)'};
      --scrollbar-width: thin;
      --scrollbar-size: 0.375rem;
      --scrollbar-minlength: 1.5rem;
      --scrollbar-border-radius: 1.5rem;
    }
  `;
}
