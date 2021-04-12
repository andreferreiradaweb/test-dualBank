import Logo from '../../img/Logos.svg'
import Eye from '../../img/eye.svg'
import Calendar from '../../img/Calendar.svg'
import ChatText from '../../img/ChatText.svg'
import Bell from '../../img/Bell.svg'
import RightMenu from '../../img/right-menu.svg'
import SearchIcon from '../../img/SearchIcon.svg'
import CopySimple from '../../img/CopySimple.svg'

// import Popout from '../popout'

import * as S from './styles'

function Header() {
  return (
    <S.Wrapper>
      <S.HeaderLeft>
        <S.Logo src={Logo} alt="" />
        <S.Division />
        <S.AccountSelect>
          <select name="" id="">
            <option value="">Conta Corrente</option>
          </select>
          <div>
            <div>{<S.Error title="copiar">Ag. 00005-1</S.Error>}</div>
            <div>
              {<S.Error title="copiar">CC. 00000000000000000020-1</S.Error>}
            </div>
            <div>
              {
                <S.Error title="copiar tudo">
                  <img src={CopySimple} alt="" />
                </S.Error>
              }
            </div>
          </div>
        </S.AccountSelect>
        <S.Balance>
          <span>
            Saldo <img src={Eye} alt="" />{' '}
          </span>
          <strong>R$40.000,00</strong>
        </S.Balance>
      </S.HeaderLeft>
      <S.HeaderRight>
        <S.Search>
          <input type="text" placeholder="Pesquisar" />
          <a href="#">
            <img src={SearchIcon} alt="" />
          </a>
        </S.Search>
        <a href="#">
          <img src={ChatText} alt="" />
        </a>
        <a href="#">
          <img src={Calendar} alt="" />
        </a>
        <a href="#">
          <img src={Bell} alt="" />
        </a>
        <S.ProfileImg src={RightMenu} alt="" />
      </S.HeaderRight>
    </S.Wrapper>
  )
}

export default Header
