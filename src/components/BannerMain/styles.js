import styled from 'styled-components';

export const BannerMainContainer = styled.section`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  color: var(--white);
  height: 80vh;

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }
`;

export const ContentAreaContainer = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left:  5%;
  margin-right: 5%;
  height: 100%;

  @media (max-width: 800px){
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  margin-bottom: 50px;
  width: 50%;

  @media (max-width: 800px) {
    width:  100%;
  }
`;

ContentAreaContainer.Category = styled.h1`

`;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display:  none;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-size: 40px;
  font-weight: 300;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;


export const WatchButton = styled.button`
  background-color: var(--white);
  border: 0;
  border-radius: 4px;
  color: var(--black);
  cursor: pointer;
  display: none;
  font-weight: bold;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  padding: 16px 24px;

  @media (max-width: 800px) {
    display: block;
  }

`;