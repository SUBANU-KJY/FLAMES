import styled from "styled-components"

    const Wrapper =styled.div`
    display:flex;
    align-items: center;
    flex-direction:column;
    justify-content: center;
    line-height:3.5rem;
    background-color: pink;
    height:100vh;

    .heading{
        color:white;
        font-size:1.3rem;
        text-align:center;
        padding-bottom:20px;
        text-shadow:1px 0px 3px whitesmoke;
    }
        

    .inputsdiv{
        padding-bottom: 60px;
    }

    .input1{
    border-radius: 50px;
    padding:5px;
    }
    .input2{
        border-radius: 50px;
    padding:5px;

}


    .label1{
        font-size: larger;
        color:white;
        padding-right:10px;
    }
    .label2{
        color:white;
        font-size: larger;
        padding-right:10px;
    }
    

    .button1{
        width: 120px;
        border-radius: 20px;
        padding: 5px;
        background-color:whitesmoke;
        font-size:14px;

        
    }
    .button2{
        width: 90px;
        border-radius: 20px;
        padding: 5px;
        background-color:whitesmoke;
        font-size:14px;
    }


    .resultdiv{
        color:white;
        font-size: 2rem;
    }
    .buttons{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    `
    export default Wrapper;