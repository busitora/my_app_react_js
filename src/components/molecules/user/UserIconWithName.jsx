import styled from 'styled-components';

export const UserIConWithName = (props) => {
  const { name, image } = props;
  return (
    <SContainer>
      <SImage alt={image} height={160} width={160} src={image} />
      <SName>{name}</SName>
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
