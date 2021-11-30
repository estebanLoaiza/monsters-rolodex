import './search-box.styles.css'

export const SearchBox = ({placeholder, handleChannge}) => (
    // <input className="search" type="search" onChange={e => this.setState({ searchField: e.target.value})} placeholder={placeholder}/>
    <input className="search" type="search" onChange={handleChannge} placeholder={placeholder}/>
)
    
