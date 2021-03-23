import styled from '@emotion/styled'
import Input from './form/Input';

export default function MusicSearch() {
  return (
    <SearchWrap>
      <form>
        <Input placeholder="Buscar"/>
      </form>
    </SearchWrap>
  )
}

const SearchWrap = styled.div`
	top: 10px;
`