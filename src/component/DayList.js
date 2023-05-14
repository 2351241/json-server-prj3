// Day.js와 DayList.js에서 useState와 useEffect의 반복사용을 피하기위해 
// 해당함수 2개는 커스텀훅스인 useFetch에 한번 작성하고 호출하여사용

import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";


export default function DayList(){

  // const[days, setDays] =useState([])

  // // useEffect(함수, []) --> 초기 화면 렌더링이후 한번만 실행! 
  // // 즉, 렌더링이후,  json 데이터를 한번 가져옴 
  
  // useEffect(()=>{
  //   fetch("http://localhost:4000/days")
  //   .then(res => {return res.json();})
  //   .then(data => {setDays(data);})
  // },[]);

  // 함수호출
  const days = useFetch("http://localhost:4000/days")
  
  return(
    <ul className="list_day">
        {days.map( day =>(
          <li key={day.id}> 
           <Link to ={`/day/${day.day}`}> Day {day.day} </Link>
          </li>
        ))}
    </ul>
  )
}


