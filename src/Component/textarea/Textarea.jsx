function Textarea(props) {
    return(
        <>
          <label >textarea</label>  
        <textarea  onChange={props.handleChange}></textarea>
        </>
    )
}
export default Textarea