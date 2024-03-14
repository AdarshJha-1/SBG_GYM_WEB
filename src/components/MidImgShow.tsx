import gymM1 from "../assets/gymM1.avif";
import gymM2 from "../assets/gymM2.avif";
import gymM3 from "../assets/gymM3.avif";
import gymM4 from "../assets/gymM4.jpeg";
import gymM5 from "../assets/gym1.jpg";
import gymM6 from "../assets/gym2.jpeg";
import gymM7 from "../assets/gym3.jpg";

const midImg = [
    gymM1,
    gymM2,
    gymM3,
    gymM4,
    gymM5,
    gymM6,
    gymM7,
]

const MidImgShow = () => {
  return (
    <div className="w-full border-b-[1px] border-gray-400 flex flex-wrap items-center justify-center gap-20 p-4">
      {midImg.map((img, index) => (
        <img className="h-20 rounded-lg" key={index} src={img}/>
      ))}
    </div>
  );
};

export default MidImgShow;
