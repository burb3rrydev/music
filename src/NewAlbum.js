import React, { useState } from 'react';
import dataSource from './dataSource';
import { useNavigate } from 'react-router-dom';

const NewAlbum = (props) => {
  const [albumTitle, setAlbumTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("submit");
    
    const album = {
      title: albumTitle,
      artist: artist,
      description: description,
      year: year,
      image: image,
      tracks: []
    };
    
    console.log(album);
    await saveAlbum(album);
    props.onNewAlbum(navigate);
  };

  const saveAlbum = async (album) => {
    const response = await dataSource.post('/albums', album);
    console.log(response);
    console.log(response.data);
  };

  const handleCancel = () => {
    navigate("/");
  };

  const updateTitle = (event) => setAlbumTitle(event.target.value);
  const updateArtist = (event) => setArtist(event.target.value);
  const updateDescription = (event) => setDescription(event.target.value);
  const updateYear = (event) => setYear(event.target.value);
  const updateImage = (event) => setImage(event.target.value);

  return (
    <div className="container">
      <h1>Create Album</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="albumTitle">Album Title</label>
          <input
            type="text"
            className="form-control"
            id="albumTitle"
            value={albumTitle}
            onChange={updateTitle}
          />
        </div>
        <div className="form-group">
          <label htmlFor="albumArtist">Artist</label>
          <input
            type="text"
            className="form-control"
            id="albumArtist"
            value={artist}
            onChange={updateArtist}
          />
        </div>
        <div className="form-group">
          <label htmlFor="albumDescription">Description</label>
          <textarea
            className="form-control"
            id="albumDescription"
            value={description}
            onChange={updateDescription}
            placeholder="Enter Album Description"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="albumYear">Year</label>
          <input
            type="text"
            className="form-control"
            id="albumYear"
            value={year}
            onChange={updateYear}
          />
        </div>
        <div className="form-group">
          <label htmlFor="albumImage">Image</label>
          <input
            type="text"
            className="form-control"
            id="albumImage"
            value={image}
            onChange={updateImage}
          />
        </div>
        <div align="center">
          <button
            type="button"
            className="btn btn-light"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewAlbum;
