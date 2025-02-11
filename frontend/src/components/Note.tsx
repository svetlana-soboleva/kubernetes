export const 
Note = ({notes}) => {
  
  return (
    <div>
    {
        notes.map((n) => (
          <div  key={n.id}>
            <p>{n.date}</p> 
            <h2>{n.text}</h2>
             {/* <img src="" alt="" /> */}
          </div>
        ))
      }
    </div>
  )
}
