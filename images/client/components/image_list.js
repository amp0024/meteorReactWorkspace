// Image list component

// import react
import React from 'react';
import ImageDetail from './image_detail';

// component
const ImageList = (props) => {

	const validImages = props.images.filter(image => !image.is_album);
	
	const RenderedImages = validImages.map(image => 
		<ImageDetail key={image.title} image={image} />
	);

	return (
		<ul className="media-list list-group">
			{RenderedImages}
		</ul>
	);
};

// Export component

export default ImageList;