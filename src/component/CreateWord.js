import React, { useRef } from "react";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch("http://localhost:4000/days");
  
  function onSubmit(e) {
    e.preventDefault();

    console.log(engRef.current.value);
    console.log(korRef.current.value);
    console.log(dayRef.current.value);

      fetch(`http://localhost:4000/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then(res => {
        if (res.ok) {
          alert("생성이 완료 되었습니다");
        }
      });
    }
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
      <form onSubmit={onSubmit}>
        <div className="input_area">
          <label>English Word</label>
          <input type="text" placeholder="Type English Word" ref={engRef} />
        </div>
        <div className="input_area">
          <label>한국어 의미</label>
          <input type="text" placeholder="한국어 뜻을 입력하세요" ref={korRef} />
        </div>
        <div className="input_area">
          <label>Day</label>
          <select ref={dayRef}>
            {days.map(day => (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            ))}
          </select>
        </div>
        <button> 단어 저장</button>
      </form>
    );
}