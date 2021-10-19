import { ItemResult } from '../ItemResult';
import { Title } from '../Title';
import * as S from './styles'

export function Search() {
  return (
    <S.Container>
      <Title title='Resultados da Busca'/>

      <S.Results>
        <ItemResult />
        <ItemResult />
        <ItemResult />
        <ItemResult />
      </S.Results>
    </S.Container>
  );
}