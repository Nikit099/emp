export default function Search({search, handleChange, placeholder}) {

    return (

    <input
     value={search}
    onChange={(e) => handleChange(e.target.value) }
    type="search" 
    className="search"
    placeholder={placeholder}/>

    ) 
    }