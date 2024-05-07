declare module 'react-multi-carousel' {
    import { ReactNode } from 'react';

    interface CarouselProps {
        responsive?: any;
        ssr?: boolean;
        draggable?: boolean;
        swipeable?: boolean;
        centerMode?: boolean;
        autoPlay?: boolean;
        autoPlaySpeed?: number;
        keyBoardControl?: boolean;
        customTransition?: string;
        transitionDuration?: number;
        containerClass?: string;
        removeArrowOnDeviceType?: Array<string | undefined>;
        deviceType?: number;
        dotListClass?: string;
        itemClass?: string;
        arrows?: boolean;
        renderButtonGroupOutside?: boolean;
        renderDotsOutside?: boolean;
        additionalTransfrom?: number;
        beforeChange?: () => void;
        centerPadding?: string;
        focusOnSelect?: boolean;
        minimumTouchDrag?: number;
        partialVisbile?: boolean;
        slidesToSlide?: number;
        swipeScrollTolerance?: number;
        customLeftArrow?: ReactNode;
        customRightArrow?: ReactNode;
        customDot?: ReactNode;
        customButtonGroup?: ReactNode; // Include customButtonGroup prop
        children?: ReactNode;
    }

    export default function Carousel(props: CarouselProps): JSX.Element;
}
