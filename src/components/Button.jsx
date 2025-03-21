function Button({children, style}) {
    return (
        <button className="flex justify-between items-center h-[2rem] font-medium font-button cursor-pointer" style={style}>
           {children} 
        </button>
    )
}

export default Button
