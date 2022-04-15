import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import parse from "html-react-parser";

function Home(){

    let dispalyFormCss = {
        margin: "5px 30px",
        backgroundColor: "orange",
        borderRadius: "8px",
        textAlign: "left"
    }

    let stylingRow = {
        display: "inline",
        float: "left"
    }

    let rowDivCss = 
        `background-color: cadetblue;
        borderRadius: 10px;
        margin: 10px 5px;
        outline: dotted;
        `

    let rowH2Css = 
        `float: right`
    

    let buttonCss = {
        display: "inline",
        margin: "10px 10px 5px 10px",
        float: "right",
    }

    var [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const db = useSelector((state) => state.db);
    var [htmlString, setHtmlString] = useState("");
    const lol = "<h1>home</h1>";

    function sortByPublishDate(){
        let dbObject = Object.assign({},db);
        if(dbObject.docs!=null){
            if(dbObject.docs.length!=0){
                dbObject.docs.sort(function(a,b){
                    if(a.publish_date.length==0){
                        a.publish_date.push(9999);
                    }
                    if(b.publish_date.length==0){
                        b.publish_date.push(9999);
                    }
                    let a1 = 0;
                    let b1 = 0;

                    if(a.publish_date[0].split(",").length!=0){
                        a1 = a.publish_date[0].split(",")[a.publish_date[0].split(",").length-1];
                    }else{
                        a1 = a.publish_date[0];
                    }

                    if(b.publish_date[0].split(",").length!=0){
                        b1 = b.publish_date[0].split(",")[b.publish_date[0].split(",").length-1];
                    }else{
                        b1 = b.publish_date[0];
                    }
                    return (a1-b1);
                })
                dispatch({type:"addData",value:dbObject});
            }
            
        }
    }

    function sortByAlphabetic(){
        let dbObject = Object.assign({},db);
        if(dbObject.docs!=null){
            if(dbObject.docs.length!=0){
                dbObject.docs.sort(function(a,b){   
                    return a.title.localeCompare(b.title);
                })
                dispatch({type:"addData",value:dbObject});
            }
            
        }
    }



    useEffect(()=>{
    },[])

    useEffect(()=>{
        let dbObject = db;
        let dbString = "";
        console.log("db again");
        if(dbObject!=null){
            dbObject.docs.forEach(doc =>{

                const title = doc.title;
                const name = doc.author_name;
                var date = "";

                if(doc.hasOwnProperty('publish_date')){
                    if(doc.publish_date.length!=0){
                        date = doc.publish_date[0];
                    }
                }
                

                dbString += `<div style="${rowDivCss}">
                <div>
               <h2 style="${rowH2Css}">Cover</h2>
               </div>
               <div >
               <h2>${title}</h2>
               <h2>${name}</h2>
               <h2>${date}</h2>
               </div> 
            </div>`;
            setHtmlString(dbString);
            })
        }
    },[db])


    return(
        <div style={dispalyFormCss}>
            <h1 style={{display: 'inline'}}>Search result: name</h1>
            <button onClick={sortByAlphabetic} style={buttonCss}>Sort by alphabetically</button>
            <button onClick={sortByPublishDate} style={buttonCss}>Sort by publish_date</button>
            {parse(htmlString)}
        </div>
    );
}

export default Home;