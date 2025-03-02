import styled from "styled-components";

export const Container = styled.button`
    border: .2rem dashed ${({theme}) => theme.colors.black};
    width: 20rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.6rem;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`

export const EditContainer = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.colors.gray};
  border-radius: 1.6rem;
  width: 20.4rem;
  padding: 2.65rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.8rem;
`;