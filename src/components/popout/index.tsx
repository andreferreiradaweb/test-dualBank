import React from 'react'

import * as S from './styles'
import CopySimple from '../../img/CopySimple.svg'
interface TooltipProps {
  title: string
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({ title, children, className }) => (
  <S.Wrapper className={className}>
    {children}
    <span>
      <img src={CopySimple} alt="" />
      {title}
    </span>
  </S.Wrapper>
)

export default Tooltip
