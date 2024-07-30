import React, { useState } from 'react';
import dataSourse from './dataSource';
import { useNavigate } from 'react-router-dom';


const EditAlbum = (props) => {
	let album = {
		title: '',
		artist: '',
		description: '',
		year: '',
		image: '',
		tracks: [],
	};
	let newAlbumCreation = true;

	if (props.album) {
		album = props.album;
		newAlbumCreation = false;
	}

	const [albumTitle, setAlbumTitle] = useState(album.title || "");
	const [artist, setArtist] = useState(album.artist || "");
	const [description, setDescription] = useState(album.description || "");
	const [year, setYear] = useState(album.year || "");
	const [image, setImage] = useState(album.image || "");

	const navigate = useNavigate();

	const updateTitle = (event) => {
		setAlbumTitle(event.target.value);
	};
	const updateArtist = (event) => {
		setArtist(event.target.value);
	};
	const updateDescription = (event) => {
		setDescription(event.target.value);
	};
	const updateYear = (event) => {
		setYear(event.target.value);
	};
	const updateImage = (event) => {
		setImage(event.target.value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		console.log("submit");
		const editedAlbum = {
			albumId: album.albumId,
			title: albumTitle,
			artist: artist,
			description: description,
			year: year,
			image: image,
			tracks: [],
		};
		console.log(album);
		saveAlbum(editedAlbum);
	};

	const saveAlbum = async (album) => {
		let response;
		if (newAlbumCreation)
			response = await dataSourse.post('/albums', album);
		else
			response = await dataSourse.put('/albums', album);
		console.log(response);
		console.log(response.data);
		props.onEditAlbum(navigate);
	};

	const handleCancle = () => {
		navigate("/")
	}



	return (
		<div className='container'>
			<form onSubmit={handleFormSubmit}>
				<h1>{newAlbumCreation ? "Create New" : "Edit"}  Album</h1>
				<div className="form-group">
					<label htmlForfor="albumTitle">Album Title</label>
					<input type="text" className="form-control" id="albumTitle" placeholder="Album Title" value={albumTitle} onChange={updateTitle} />
					<label htmlForfor="albumArtist">Artist</label>
					<input type="text" className="form-control" id="albumArtist" placeholder="Artist" value={artist} onChange={updateArtist} />
					<label htmlForfor="albumDescription">Description</label>
					<input type="text" className="form-control" id="albumDescription" placeholder="Description" value={description} onChange={updateDescription} />
					<label htmlForfor="albumYear">Year</label>
					<input type="text" className="form-control" id="albumYear" placeholder="Album Year" value={year} onChange={updateYear} />
					<label htmlForfor="albumImage">Image</label>
					<input type="text" className="form-control" id="albumImage" placeholder="Album Image" value={image} onChange={updateImage} />
				</div>
				<div style={{ margin: 10 }}>
					<button type="button" className="btn btn-secondary" onClick={handleCancle}>Cancel</button>
					<button type="submit" className="btn btn-warning">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default EditAlbum;