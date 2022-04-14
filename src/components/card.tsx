var stylingObject = {
    h1: {
        padding: "20px",
        margin: "10px",
        backgroundColor: "gray",
        height: "300px",
        color: "yellow",
        display: "flex",
        width: "33%"
    }
}

export const Card = () => {
  return (
    <h1 style={stylingObject.h1}>Item</h1>
  )
}
