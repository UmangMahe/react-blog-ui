
const Spacer = (props) => {
    if(props.spacing){
        defaultValues={
            ...defaultValues,
            height: props.spacing
        }
    }
    return(
        <span style={defaultValues}/>
    )
}

let defaultValues = {
    display: "block",
    height: "40px"
}
export default Spacer