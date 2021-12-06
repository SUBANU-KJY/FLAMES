

import React from "react";
import Wrapper from "./components/Styles";

  //import {useState} from 'react';



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
    }
  }
  

  const splitNames = (Bname,Gname) => {
      
    
        const splitBname= Bname.split("")
        const splitGname = Gname.split("")
        console.log(splitBname);
        console.log( splitGname );
        return [splitBname, splitGname]
    
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

    const refreshPage = ()=>{
      window.location.reload();
    }
    
  
  //s <input type="text" value={Bname} onChange={event => setBname(event.target.value)}></input><br/>
//https://c4.wallpaperflare.com/wallpaper/276/379/634/love-image-4k-couple-wallpaper-preview.jpg
    
    return (
      <Wrapper className="wrapper">
      <form>
        <div className="heading">Check with your loved ones</div>
        <div className="inputsdiv">
    <label className="label1">Boyname:</label>
    <input type="text" ref={Boyname} className="input1"></input><br/>
    <label className="label2">Girlname:</label>
    <input type="text" ref={Girlname} className="input2" ></input><br/>
    </div>
    <div className="buttons">
    <button type="button" onClick={OnclickHandle} className="button1">calculate</button><br/>
    <button type="button" onClick={refreshPage} className="button2">reset</button>
    </div>
    </form><br/>
    <div className="resultdiv"></div>
  
    
    </Wrapper>
    );
  }


  export default App;
