import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

const users = [...Array(20).keys()].map((val) => {
  return {
    id: val,
    name: `ブシトラ :${val}人目`,
    image: 'https://source.unsplash.com/E9kVmtiqqGE',
    phone: '090-1234-5678',
    company: {
      name: 'ブシトラ株式会社',
    },
    email: 'busitora@gmail.com',
    website: 'https://busitora.com/',
  }
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user}/>
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  /* ↓ レスポンシブなグリッドレイアウト */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
