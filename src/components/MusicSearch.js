import styled from '@emotion/styled'
import Input from './form/Input';

export default function MusicSearch() {
  return (
    <SearchWrap>
        <Input placeholder="Buscar"/>
    </SearchWrap>
  )
}

const SearchWrap = styled.div`
	top: 10px;
`