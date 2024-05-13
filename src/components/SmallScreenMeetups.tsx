
import wpLoyaltyImg1 from '../assets/images/wp-loyalty-img1.webp';
import rtCampImg1 from '../assets/images/rtcampimg1.webp';
import rtCampImg2 from '../assets/images/rtcampimg2.webp';
import wp2 from '../assets/images/wp2.webp';
import wp1 from '../assets/images/wp1.webp';
import wp3 from '../assets/images/wp3.webp';
const SmallScreenMeetups = () => {
  return (
    <main className="flex justify-center items-center border-primary_white">
    <div className="w-full  mx-5">
        <div
            className="h-80 my-5 rounded hover:shadow-3xl transition-all "
            style={{
                backgroundImage: `url(${wpLoyaltyImg1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        ></div>
        <div
            className="h-80 my-5 rounded hover:shadow-3xl transition-all"
            style={{
                backgroundImage: `url(${rtCampImg1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        ></div>
        <div
            className="h-80 my-5 rounded hover:shadow-3xl transition-all"
            style={{
                backgroundImage: `url(${wp2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        ></div>
        <div
            className="h-80 my-5 rounded hover:shadow-3xl transition-all"
            style={{
                backgroundImage: `url(${wp1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        ></div>
        <div
            className="h-80 my-5 rounded hover:shadow-3xl transition-all"
            style={{
                backgroundImage: `url(${wp3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        ></div>
        <div
            className="h-80 my-5 rounded hover:shadow-3xl transition-all border"
            style={{
                backgroundImage: `url(${rtCampImg2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        ></div>
    </div>
</main>
  )
}

export default SmallScreenMeetups