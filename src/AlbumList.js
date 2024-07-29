import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const AlbumList = (props) => {

    const handleSelectionOne = (albumId) => {
        console.log('Selected ID is ' + albumId);
        props.onClick(albumId, navigator);
    };

    console.log('props albumList', props);
    const navigator = useNavigate();
    const albums = props.albumList.map((album) =>{
        return (
            <Card
              key = {album.id}
              albumId = {album.id}
              albumTitle={album.title}
              albumDescription={album.description}
              buttonText="OK"
              imgURL={album.image}
            />
          );
    });
    return <div className='container'>{albums}</div>
};

export default AlbumList;