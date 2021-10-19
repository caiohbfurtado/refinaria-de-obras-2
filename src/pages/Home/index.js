import { Aside } from "../../components/Aside";
import { Search } from "../../components/Search";

import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <Aside />
      <Search />
    </S.Container>
  )
}