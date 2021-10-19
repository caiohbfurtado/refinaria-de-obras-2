import { Button } from '../Button';
import * as S from './styles';

export function ItemResult() {
  return (
    <S.Container>
      <h3>Batman Begins</h3>

      <p>Ano: 2005</p>

      <Button type="button" title='ver detalhes'/>
    </S.Container>
  );
}