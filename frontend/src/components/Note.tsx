import { useEffect, useState } from 'react'
import { getNotes } from '../api/api'

export const 
Note = () => {

  const [notes, setNotes] = useState()

  useEffect( () => {
    const fetchData = async () => {
      await getNotes();
  
      //setNotes(result);
    };
  
    fetchData();
  }, [notes])
  return (
    <div>
        <div>
            <h1>Summer in Sweden</h1>
            <p>6 Aug 2020, 07:50 PM</p>
        </div>
        {/* <img src="" alt="" /> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque necessitatibus perferendis praesentium labore amet quos itaque eos? Doloremque illum, recusandae eos sequi odit deserunt ullam culpa voluptas officia accusantium!</p>
    </div>
  )
}
