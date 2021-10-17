import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../providers/UserProvider';

export const UserIConWithName = (props) => {
  const { name, image } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  // console.log(userInfo.isAdmin);
  return (
    <SContainer>
      <SImage alt={image} height={160} width={160} src={image} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`

const SImage = styled.img`
  border-radius: 50%;
  max-width: 100%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`
const SEdit = styled.span`
text-decoration: underline;
color: #aaa;
cursor: pointer;
`
