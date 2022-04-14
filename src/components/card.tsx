const cardStyles = {
    backgroundColor: 'yellow'
}

export const Card = ({style}) => {
  return (
    <h1 style={{...cardStyles, ...style}}>Card</h1>
  )
}