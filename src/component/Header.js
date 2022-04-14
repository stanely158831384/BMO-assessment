
import React,{useEffect,useRef}from "react";
import pic from "../static/a.svg.png";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
function Header() {
    let mystyle = {
        width: '100%',
        height: '70px',
        backgroundColor: '#d0e4fe',
        borderRadius: '50px 20px'

    }
    let searchBarCss = {
        borderRadius: '25px',
        height: '50px',
        backgroundColor: 'white',
        position: 'absolute',
        left: '150px',
        top: '7px'
    }
    let searchButtonCss = {
        display: 'inline',
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        left: '90px',
        top: '10px',
        position: 'absolute',
    }
    let searchPicCss = {
        height: '50px',
        width: '50px',
        position: 'absolute',
        left: '-6px',
        top: '-3px'
    }
    const dispatch = useDispatch();
    const db = useSelector((state) => state.db);
    const dbRef = useRef(db);
    var reRef = "";
    var input1Ref = useRef();
    // var input2Ref = createRef(input1);
    function Login(){
        // let result = $("#name").val();
        console.log(input1Ref.current);
        input1Ref = $.trim(input1Ref);
        input1Ref = input1Ref.replace(" ","+");
        let url = "http://openlibrary.org/search.json?q=the+great+gatsby";
        console.log(url);
        $.ajax({
            type: "GET",
            dataType: "json",
            url:url,
            data: $('#form1').serialize(),
            success: function(result){
                console.log(result);
                if(result.resultCode==200){
                    alert("Success");
                }
            },
            error: function(){
                alert("exveption!");
            }
        });
    }
    function dontRefresh(e){
        e.preventDefault();
    }
    useEffect(() => {
        const divElement = input1Ref.current.value;
        console.log(divElement);
        console.log($("#name").val())
    },[])
    useEffect(() => {
        console.log(input1Ref.current.value);
    })
    return(
        <div style={mystyle}>
            <div>
            <form action="##" method="get" id="form1" onSubmit={dontRefresh}>
                <input ref = {input1Ref} type="text"  id="name" style={searchBarCss} placeholder="Search" size="70"></input>
                <input type="image" src ={pic} name="" id="" style={searchButtonCss}></input>
            </form>
            </div> 
        </div>
    )
}

export  default Header;