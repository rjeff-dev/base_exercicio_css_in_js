import styled from 'styled-components'

export const FormHero = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${(props) => props.theme.corPrincipal};
    opacity: 0.7;
    z-index: 0;
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  color: #eee;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`

export const HeroTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
