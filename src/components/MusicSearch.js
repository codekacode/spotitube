import 

export default function MusicSearch() {
  return (
    <div className="music-searc-wrap">
      <form>
        <input placeholder="Buscar"/>
        <button>
          <i className=""/>
        </button>
      </form>
    </div>
  )
}


.track-search-container {
	position: relative;
	top: 10px;
}

.track-search-container input {
	background: #fff;
	width: 120px;
	border-radius: 10px;
	border: none;
  font-family: 'Proxima Nova', Georgia, sans-serif;
	padding: 4px 4px 4px 10px;
	outline: none;
}

.search {
	margin-left: 5px;
	cursor: pointer;
	cursor: pointer;
  color: white;
  font-size: 15px;
}

button {
	background: none;
	border: none;
	outline: none;
}