const S = {};

S.Navigation = styled.div`
  /* styles */
`;

S.Content = styled.div`
  /* styles */
`;

const Navigation = () => (
  <S.Navigation>
    <Header>{headerContent}</Header>
    <S.Content>{content}</S.Content>
  </S.Navigation>
);
