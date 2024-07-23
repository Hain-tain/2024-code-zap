import { css } from '@emotion/react';

export const inputStyle = ({
  width,
  height,
  fontSize,
  fontWeight,
}: {
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
}) =>
  css({
    padding: '1.4rem',
    borderRadius: '8px',
    border: '0.1rem solid #808080',
    background: '#eee',
    width,
    height,
    fontSize: fontSize || 'inherit',
    fontWeight: fontWeight || 'normal',

    '&::placeholder': {
      color: '#808080',
    },

    '&:focus': {
      borderColor: 'black',
    },

    '&:disabled': {
      cursor: 'default',
      opacity: 0.6,
      backgroundColor: '#f5f5f5',
      borderColor: '#ddd',
    },
  });

export const searchStyle = {
  paddingLeft: '4.2rem',
};

export const inputWrapperStyle = (width?: string) =>
  css({
    position: 'relative',
    display: 'inline-block',
    width,
  });

export const iconStyle = css({
  position: 'absolute',
  left: '1.4rem',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '2rem',
  height: '2rem',
});