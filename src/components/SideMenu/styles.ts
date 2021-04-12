import styled, { css } from 'styled-components'

type Props = {
  // [size in keyof typeof VariantTypes]: keyof typeof VariantTypes
  size: keyof typeof VariantTypes
}

enum VariantTypes {
  SMALL = 'small',
  LARGE = 'large'
}

const variants = {
  small: css`
    width: 46px;
  `,
  large: css`
    width: 200px;
  `
}

export const Wrapper = styled.div<Props>`
  ${({ size }) => variants[VariantTypes[size]]}
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #f9f9f9;
  transition: height 0.5s;
`
export const OpenBox = styled.button`
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  background-color: #622ee5;
  margin-left: 28px;
  :hover {
    cursor: pointer;
  }
  img {
    width: 24px;
  }
`
