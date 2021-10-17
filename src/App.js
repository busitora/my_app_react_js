import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayout';


export default function App() {

  const user = {
    name: 'ブシトラ',
    image: 'https://source.unsplash.com/E9kVmtiqqGE',
    phone: '090-1234-5678',
    company: {
      name: 'ブシトラ株式会社',
    },
    email: 'busitora@gmail.com',
    website: 'https://busitora.com/',
  };

  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user}></UserCard>
      </DefaultLayout>
    </BrowserRouter>
  );
}
