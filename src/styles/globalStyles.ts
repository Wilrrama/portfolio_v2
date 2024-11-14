import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;  
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;      
	  font-family: "Poppins", sans-serif;
    
  }

   :root {
     --bg-color: #1f242d;
     --second-bg-color: #323946;
     /* --main-color: #0B2F9d; */
     --main-color: #7cf03d;
     --white-color: #fff;
     --disable-color: #fff3;
  }

  html{
    
  
  }

  body {
   
    background: var(--bg-color);
    color: var(--white-color)
  }

  a {
    text-decoration: none;
    color: var(--white-color);
  }

   ul, ol {
    list-style: none;
  }

  
`;
