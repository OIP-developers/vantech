import orbSphere from '../assets/images/orb-sphere.webp';
import moonImg from '../assets/images/moonimg.webp';
import bannerStar from '../assets/images/banner-star.png';

export default function OrbSphere({
  className,
  star = true,
  spin = false,
}: {
  className?: string;
  star?: boolean;
  spin?: boolean;
}) {
  return (
    <div className={`orb-sphere${className ? ` ${className}` : ''}`}>
      <img
        src={spin ? moonImg : orbSphere}
        alt=""
        className={`orb-sphere__img${spin ? ' orb-sphere__img--spin' : ''}`}
        loading="lazy"
      />
      {star && <img src={bannerStar} alt="" className="orb-sphere__star" />}
    </div>
  );
}
