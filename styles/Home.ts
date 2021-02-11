import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex: 1;
  flex-direction: column;
` 

export const Header = styled.div`
  height: 100px;
  border-bottom: 3px solid #444;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderTitle = styled.h1`
  color: #444;
`

export const Title = styled.h3`
  font-size: 24px;
  margin-left: 20px;
  color: green;
`

export const Code = styled.textarea`
  margin: 0 20px;
  resize: vertical;
  background-color: #444;
  color: #fff;
  font-size: 20px;
  padding: 20px;
`