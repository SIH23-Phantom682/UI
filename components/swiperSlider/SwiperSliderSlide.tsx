import clsx from 'clsx';
import Link from 'next/link';

export default function SwiperSliderSlide({img, link, caption, captionPosition, useFilling, fillingColor, fillingOpacity}: ISwiperSliderSlide) {
	const isGlobalLink = Boolean(link && /^http/.test(link));
	const linkProps = isGlobalLink ? {target: '_blank'} : {};

	return <>
		<div className='swiper-slider__bg-img' style={{backgroundImage: `url("https://www.indiapost.gov.in/VASHindi/PublishingImages/WebBanner3D.jpg")`}} />
			{/* {useFilling && <div className='swiper-slider__shadow' style={{backgroundColor: fillingColor, opacity: fillingOpacity}} />} */}
			{link
				? <Link
            href={link}
            // className={clsx('swiper-slider__content', captionPosition && `swiper-slider__content_${captionPosition}`)}
            >
            {/* {caption && <div className='swiper-slider__caption' dangerouslySetInnerHTML={{__html: caption}}></div>} */}
        </Link>
				: <div className={clsx('swiper-slider__content', captionPosition && `swiper-slider__content_${captionPosition}`)}>
					{/* {caption && <div className='swiper-slider__caption' dangerouslySetInnerHTML={{__html: caption}}></div>} */}
			</div>}
    </>;
}

export interface ISwiperSliderSlide {
	img: string;
	link?: string;
	caption: string | null;
	captionPosition: string | null;
	useFilling?: boolean;
	fillingColor?: string;
	fillingOpacity?: number;
}