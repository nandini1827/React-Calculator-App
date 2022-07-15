import styled from "styled-components";

// export const Background = styled.div`
//     width: 100%;
//     height: 1000px;
//     background-image: url(https://img.freepik.com/premium-vector/back-school-background-watercolor-style_23-2148593948.jpg?w=996);
//     background-repeat: no-repeat;
//     background-size: cover;
//     margin: 0;
//     padding: 0;
// `

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    width: 340px;
    margin: 40px auto;
    background-color: #E5E4E2;
    /* grid-template-columns: repeat(4, 60px);
    grid-template-rows: minmax(100px, auto) repeat(5, 50px); */
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: minmax(120px, auto) repeat(5, 80px);
    box-shadow: 5px 5px 12px #333;
    border-radius: 10px;
    padding: 10px;
    /* position: relative;
    bottom: 2vh;
    right: 10vh; */
`;

export const Screen = styled.div`
margin: 10px 6.8px;
    grid-column: 1/-1;
    background-color: rgba(60,64,67,0.99);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word;
    word-break: break-all;
    text-align: right;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px ;
    box-shadow: inset -5px -5px 12px black,
                inset 5px 5px 12px rgba(0,0,0, 0.16);
`;

export const Previous = styled.div`
    color: rgba(255,255,255,0.75);
    font-size: 1.5rem;
`;

export const Current = styled.div`
    color: white;
    font-size: 2.5rem;
`;

export const Button = styled.button`
    cursor: pointer;
    margin: 4px 4px;
    font-size: 2rem;
    outline: none;
    border: 1px outset white;
    box-shadow:  -5px -5px 12px gray,
                 5px 5px 12px rgba(0,0,0, 0.16);
    background-color: #F9F6EE;
    &:hover{
        background-color: #E5E4E2;
    }
    ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan} ;`
    }
  }};
  ${({operation})=>
    operation && `background-color:#36454F;`
  };
    ${({allClear})=>
    allClear && `background-color:#6F8FAF;`
  };
  ${({equals})=>
    equals && `border-bottom-right-radius:10px`
  };
  ${({decimal})=>
    decimal && `background-color:#6F8FAF; border-bottom-left-radius:10px `
  };
`;

export const CalIcon = styled.div`
    color: white;
    font-size: large;
    text-align: left;
`