import * as S from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Wrapper>
      <Slider {...settings}>
        <div>
          <S.SliderItem src="/images/layout/flower.jpg" />
        </div>
        <div>
          <S.SliderItem src="/images/layout/flower.jpg" />
        </div>
        <div>
          <S.SliderItem src="/images/layout/flower.jpg" />
        </div>
      </Slider>
    </S.Wrapper>
  );
}
