import styled from 'styled-components'

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 5px;
padding-left: 20px;
list-style: square;
color: gainsboro;
`;

export const WrapItem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap:20px;
`;

export const Text = styled.p`
margin: 0;
padding: 5px;
text-transform: capitalize;
color: gainsboro;

`;

export const DeleteBtn = styled.button`
border-radius: 10px;
padding: 4px  8px;
/* margin-left: auto; */
/* margin-right: 0; */

&:hover{
    background-color: darkblue;
    color: white;
}
&:focus{
    background-color: darkblue;
    color: white;
}
`; 

export const WrappText = styled.div`
/* margin: 0; */
display: contents;
/* display: flex; */
/* justify-content: space-between; */
:last-child{
    margin-left: auto;
}
`;