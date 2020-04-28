import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import CardChat from '../CardChat';

import { GroupState } from '../../hooks/group';

import { Container, ContainerGroupChats } from './styles';

interface AsideProps {
  urlPrefix: string;
  title: string;
  iconPlus?: boolean;
  items: Array<GroupState>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function searchingFor(term: string): any {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (x: any) => {
    return x.category.includes(term) || !term;
  };
}

const AsideGroup: React.FC<AsideProps> = ({
  urlPrefix,
  title,
  iconPlus,
  items,
}) => {
  const [term, setTerm] = useState('');

  return (
    <Container>
      <div>
        <p>{title}</p>
        {iconPlus && (
          <div>
            <FiPlus size={18} color="#e5e5e5" />
          </div>
        )}
      </div>
      <form>
        <input
          type="text"
          name="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Buscar"
          autoComplete="off"
        />
      </form>

      <ContainerGroupChats>
        {items &&
          items.filter(searchingFor(term)).map((item) => (
            <CardChat key={item.id} url={`/${urlPrefix}/${item.id}`}>
              <h1>{item.category.toUpperCase()}</h1>
            </CardChat>
          ))}
      </ContainerGroupChats>
    </Container>
  );
};

export default AsideGroup;