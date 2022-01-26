import React, { useState, useEffect} from "react";
import ImageCard from "./components/ImageCard";

function App() {
  const [images, setImage] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        setImage(data.hits);
        setIsloading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      <div class="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>
    </div>
  );
}

export default App;
