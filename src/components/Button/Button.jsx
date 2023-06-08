import { LoadButton } from './Button.styled';
import { getCards } from 'Servises/getCards';

export const Button = () => <LoadButton onClick={()=> getCards()}>Load more</LoadButton>;
