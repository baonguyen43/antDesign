import ImageSlider from 'components/imageSlider';
import imageList from 'fakeData/image.json';

function SliderPage(props) {
  return <ImageSlider imageList={imageList} />;
}

export default SliderPage;