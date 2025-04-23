import React from 'react'
import useproductsData from '../../hooks/useproductsData'
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import { FaFacebook, FaHome, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { FiDollarSign } from 'react-icons/fi';
import { GoArrowSwitch } from 'react-icons/go';
import { MdOutlineBrowserNotSupported } from 'react-icons/md';
import { BsBrightnessHigh } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';

export default function DetailsProduct() {




    const [products] = useproductsData();
    const {id} = useParams();
    

   const product = products && products?.find(product => product?.id === parseInt(id));
    console.log(product);

    


  return (
    <div>
        
        <div className="bg-slate-100 py-20 lg:py-16">

<div className="mx-[10px] lg:mx-8 p-3 lg:p-8 rounded  bg-white">

  <div className="flex flex-col lg:flex-row justify-between">
    

    <div className="w-full lg:w-[351px] lg:h-[351px]">
    <Swiper
    style={{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }}
    zoom={true}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Zoom, Navigation, Pagination]}
    className="mySwiper w-full lg:w-[351px] lg:h-[351px]"
    
  >
    <SwiperSlide className="w-full lg:w-[351px] lg:h-[351px]">
      <div className="swiper-zoom-container w-full lg:w-[351px] lg:h-[351px]">
        <img src={`https://admin.refabry.com/storage/product/${product?.image}`}  className="w-full lg:w-[351px] lg:h-[351px]" />
      </div>
    </SwiperSlide>
    
   
    
  </Swiper>

    </div>
    {/* lg:w-[425px] */}
    <div className="lg:px-8 mt-2 max-w-[500px]">
      <h2 className="lg:text-2xl text-xl font-bold mb-3">
        {product?.name}
      </h2>
      <span className="bg-base-200 rounded px-2 font-semibold  text-[#5fa800]">Stock : Available </span>
      <div className="flex items-center gap-2  mt-2">
        <p className="font-semibold text-[#5fa800] bg-base-200 px-2 rounded">Category : {product?.category?.name} <span className="underline"></span></p>
        <p className="font-semibold text-[#5fa800] bg-base-200 px-2 rounded">
          {/* Weight : {data?.unit} */}
        </p>
      </div>
      <div className="flex mt-3">
        <h3 className="lg:text-2xl text-xl font-semibold">
          {/* ৳{data?.recentPrice} */}
        </h3>
        <del className="bg-[#5fa800] ml-3 px-3  text-white lg:text-2xl font-semibold text-xl">
          {/* ৳{data?.previousPrice} */}
        </del>
        
      </div>
      
      <div className="mt-3">
        <p className="text-justify">{product?.short_desc} Most fresh product are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat.The root vegetables include beets, carrots, radishes, sweet potatoes</p>
      </div>
      

      <div>
        <div className="flex mt-3">
          <div className="lg:w-[85px]   mr-[35px] flex lg:mt-2 mt-2">
            <label
              className="bg-[#cbf890] hover:bg-white   border border-solid border-black px-3 text-lg font-semibold   hover:cursor-pointer h-[30px] "
              onClick={() => plus()}
            >
              +
            </label>
            {/* <p className="mx-3">{value}</p> */}
            <label
              className="bg-[#cbf890] hover:bg-white border border-solid border-black px-3 text-lg font-semibold hover:cursor-pointer h-[30px]"
              onClick={() => minus()}
            >
              -
            </label>
          </div>

          {/* {user ? (
            disabled ? <button
            className="btn hover:bg-[#4d8801] lg:w-[315px] lg:ml-8 max-w-[195px] bg-[#5fa800] text-white flex items-center gap-3"
            onClick={() => handleProduct()} disabled
          >
            <FaBagShopping className="text-xl text-white"/> Add To Cart
          </button>
          :

           <button
            className="btn hover:bg-[#4d8801] lg:w-[315px] max-w-[195px] bg-[#5fa800] text-white flex items-center lg:ml-8 gap-3"
            onClick={() => handleProduct()}
          >
            <FaBagShopping className="text-xl text-white"/> Add To Cart
          </button>
          ) : (
            <Link to="/login" state={location?.pathname}>
              <button className="btn hover:bg-[#4d8801] lg:w-[315px] lg:ml-8 bg-[#5fa800] text-white max-w-[195px] flex items-center gap-3">
                <FaBagShopping className="text-xl text-white"/> Add To Cart
              </button>
            </Link>
          )} */}
        </div>
      
      </div>

      <div className="my-4">
        <p>Call Us To Order By Mobile Number : <span className="font-semibold text-[#5fa800]">+880 1856376102</span></p>
        <p className="font-bold my-1">Share your social network</p>
        <p>For get lots of traffic from social network share this product</p>
        <div className="flex items-center gap-3 mt-3">
            <span><FaFacebook className="text-3xl"/></span>
            {/* <span><FaTwitter className="text-3xl"/></span> */}
            <span><FaWhatsapp className="text-3xl"/></span>
            <span><FaLinkedin className="text-3xl"/></span>
        </div>
      </div>
    </div>
    <div className="bg-base-200 lg:max-w-[300px] my-4 lg:mt-0 p-8 rounded space-y-7">
      <div className="flex  items-center gap-3">
      <span><LiaShippingFastSolid className="text-2xl"/></span>
      <p className="text-sm text-gray-600">
      Free shipping applies to all orders over shipping €100
      </p>
      </div>
      <div className="flex items-center gap-3">
      <span><FaHome className="text-2xl"/></span>
      <p className="text-sm text-gray-600">
      Home Delivery within 1 Hour
      </p>
      </div>
      <div className="flex items-center gap-3">
      <span><FiDollarSign className="text-2xl"/></span>
      <p className="text-sm text-gray-600">
      Cash on Delivery Available
      </p>
      </div>
      <div className="flex items-center gap-3">
      <span><GoArrowSwitch className="text-2xl"/></span>
      <p className="text-sm text-gray-600">
      7 Days returns money back guarantee
      </p>
      </div>
      <div className="flex items-center gap-3">
      <span><MdOutlineBrowserNotSupported className="text-2xl"/></span>
      <p className="text-sm text-gray-600">
      Warranty not available for this item
      </p>
      </div>
      <div className="flex items-center gap-3">
      <span><BsBrightnessHigh  className="text-2xl"/></span>
      <p className="text-sm text-gray-600">
      Guaranteed 100% organic from natural products.
      </p>
      </div>
      <div className="flex items-center gap-3">
      <span><IoLocationOutline className="text-2xl"/></span>
      <p className="text-sm text-gray-600">
      Delivery from our pick point Boho One, Bridge Street West, Middlesbrough, North Yorkshire, TS2 1AE.
      </p>
      </div>
    </div>
  </div>


  
  
</div>
</div>
    </div>
  )
}
