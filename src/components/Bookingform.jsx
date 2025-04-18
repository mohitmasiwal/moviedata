import React, { useRef, useState } from 'react';

const Bookingform = () => {
  const userRef = useRef();
  const seatRef = useRef();

  const [moviedata, setMoviedata] = useState([]);



   function handleDelete(i){
    const updata = [...moviedata]
    updata.splice(i,1)
    setMoviedata(updata)

  }
   function handleEdit(i){
   

  }


  const handleSubmit = (event) => {
    event.preventDefault();
    let username = userRef.current.value;
    let seat = seatRef.current.value;

    if( moviedata.some(i => i.seat === seat)) alert("seat booked")

    if (username.trim() === "" || seat.trim() === "") return;

    setMoviedata((prev) => [...prev, { username, seat }]);

   
    userRef.current.value = "";
    seatRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User name</label>
        <input type="text" id="username" ref={userRef} />

        <label htmlFor="seat">Seat no</label>
        <input type="number" id="seat" ref={seatRef} />

        <button type="submit">Add</button>
      </form>

      <ul>
        {moviedata.map((ele, i) => (
          <li key={i}>
            {ele.username} — seat no {ele.seat}
             <button onClick={()=> handleEdit(i)}>Edit</button>{" "}
         
            <button onClick={() => handleDelete(i)}>Delete</button>

          </li>
         
        ))}
      </ul>
    </>
  );
};

export default Bookingform;
