import styled from 'styled-components';

export const Top = (props) => {
  const { children } = props;
  return (
    <SContainer>
      <h2>トップページです</h2>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`
