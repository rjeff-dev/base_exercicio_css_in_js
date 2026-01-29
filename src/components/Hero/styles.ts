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
    background-color: ${({ theme }) => theme.principal};
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const Content = styled.div`
  position: relative;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  color: #eee;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`

export const HeroTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 48px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
