import { NavLink } from "react-router";
import styled from "styled-components";

export const Container = styled.button`
   background-color: ${({theme}) => theme.colors.primary};
   color: ${({theme}) => theme.colors.white};
   padding: 1rem 5.2rem;
   font-weight: 600;
   font-size: 1.6rem;
   line-height: 1.95rem;
   cursor: pointer;
   border: none;
   white-space: nowrap;

   &:hover {
      opacity: 0.7;
   }
`

export const AnchorContainer = styled(NavLink)`
   color: ${({theme}) => theme.colors.primary};
   font-weight: 600;
   font-size: 1.6rem;
   line-height: 1.95rem;  
   text-decoration: underline;

   &:hover {
      opacity: 0.7;
   }
`