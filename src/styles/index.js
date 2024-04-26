// In this file, you will be putting the styling which you are going to use globally in your application which leads to the reusability of the styling

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--mulish-family);
    }
    body{
        background-color: #eff5f7;
    }

    :root{
        --primary: #41e0a3;
        --mulish-family: "Mulish", sans-serif;

        //put your global colors here which you are using multiple times in your application.
        /*  You can replace the primary color with your main theme color */
    }
`;