  import React from "react";

  //import {useState} from 'react';

  import styled from "styled-components"
 const Wrapper =styled.div`
display:flex;
align-items: center;
flex-direction:column;
justify-content: center;
line-height:2.5rem;
background-color: pink;
height:100vh;
margin:0;
padding:0;
box-sizing: border-box;
`

  function App() {
    let Boyname = React.createRef();  // React use ref to get input value
    let Girlname = React.createRef();  
    //const [Bname ,setBname] = useState('');
    //const [Gname ,setGname] = useState('');



    let OnclickHandle = () => {
      
      
      let flames = ["Friend", "Lover", "Attraction", "Marriage", "Enemy", "Sister"];
      let B=Boyname.current.value;
      let G=Girlname.current.value;
      console.log(B,G)
      let Bname=B.split('.').join('').replace(/\s/gm,'');
      let Gname=G.split('.').join('').replace(/\s/gm,'');
        console.log(Bname,Gname);
        if(Bname ===""|| Gname ===""){
  document.querySelector('.resultdiv').innerHTML="Enter Both Names"
        }
      else if (Bname !=="" || Gname !== "") {
        const splitArray=splitNames(Bname,Gname);
      console.log(splitArray);//[0,1]
      const BnameRemainder = getRemainder(splitArray[1], Bname);
      const GnameRemainder = getRemainder(splitArray[0], Gname);
      const Count = getCount(BnameRemainder,GnameRemainder);
      const Result = getResult(flames,Count);
      
      document.querySelector('.resultdiv').innerHTML=`${Result}`;
      alert(Result);
    }
  }
  

  const splitNames = (Bname,Gname) => {
      
    
        const splitBname= Bname.split("")
        const splitGname = Gname.split("")
        console.log(splitBname);
        console.log( splitGname );
        return [splitBname, splitGname]
    
  }



    
  const getResult = (flames,Count) => {
    console.log(flames)
      for (let i = 6; i > 1; i--) {
          flames.splice((Count-1)%i,1)
          console.log(flames)
          console.log((Count-1)%i, flames.length-1)
      
          if ((Count-1)%i < flames.length-1 || (Count-1)%i !==0) {
            let flamesPart = flames.splice((Count-1)%i,)
              console.log(flames)
              flames = [...flamesPart,...flames]
              console.log(flames)
          }
      }
      return flames
    }


    const getRemainder = (splitName, name) => {
    console.log(splitName, name)
    //eslint-disable-next-line
    splitName.map(item => {
      const regex = new RegExp(`${item}`,"i")
      name = name.replace(regex, "")
      console.log(name)
  })
  console.log(name)
  return name
    }

    
  const getCount = (BnameRemainder,GnameRemainder) => {
    const totalWords = BnameRemainder+GnameRemainder
    const totalCount = totalWords.length
    console.log(totalCount)
    return totalCount
  }

  //s <input type="text" value={Bname} onChange={event => setBname(event.target.value)}></input><br/>

    const refreshPage = ()=>{
      window.location.reload();
    }
    return (
      <Wrapper>
      <form>
    <label>Boyname:</label>
    <input type="text" ref={Boyname}></input><br/>
    <label>Girlname:</label>
    <input type="text" ref={Girlname} ></input><br/>
    <button type="button" onClick={OnclickHandle} >calculate</button>
    <button type="button" onClick={refreshPage}>reset</button>
    </form>
    <div className="resultdiv"></div>
    
    </Wrapper>
    );
  }


  export default App;
