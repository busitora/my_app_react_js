import styled from 'styled-components';
import { Card } from '../../atoms/card/Card';
import { UserIConWithName } from '../../molecules/user/UserIconWithName';

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIConWithName image={user.image} name={user.name}/>
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>電話番号</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  dt {
    float: left;
    /* 要素横一列 */
    margin-bottom: 0px;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
    /* はみ出した時に改行 */
  }
`
