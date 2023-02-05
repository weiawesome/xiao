import React from "react";
import '../App.css';
import ImageGallery from 'react-image-gallery';
import {Link} from "react-router-dom";
export default  function Home(){
    const images = [
        {
            original:require('../Photos/Taichung/index.jpg'),
        },
        {
            original:require('../Photos/Train/index.jpg'),
        },
        {
            original:require('../Photos/Ferris/index.jpg'),
        },
        {
            original:require('../Photos/cake/index.jpg'),
        },
        {
            original:require('../Photos/Bali/index.jpg'),
        },
        {
            original:require('../Photos/banchao/index.jpg'),
        },
        {
            original:require('../Photos/forest/index.jpg'),
        },
        {
            original:require('../Photos/Giaofan/index.jpg'),
        },
        {
            original:require('../Photos/Gioxi/index.jpg'),
        },
        {
            original:require('../Photos/saosan/index.jpg'),
        },
        {
            original:require('../Photos/Shichu/index.jpg'),
        },
    ];

    return(
        <div className={'container mx-auto flex items-center flex-col'}>
            <div className={'title text-justify py-10 font-bold items-center'}>
                <h4 className="text-5xl font-bold text-center">Xiao & Wei</h4>
            </div>
            <ImageGallery autoPlay={false} useBrowserFullscreen={true} showPlayButton={false} items={images} ></ImageGallery>

            <div className={'glass my-5 text-justify items-center'}>
                <h3 className="text-4xl font-bold text-center">Routes we have been</h3>
                <div className={'flex flex-row my-3 mt-5'}>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/Ferris'}>
                        <img className={'imgs px-2'} src={require('../Photos/Ferris/index.jpg')}/>
                        <p className={'font-bold text-indigo-400 text-2xl'}>美麗華</p>
                    </Link>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/Taichung'}>
                        <img className={'imgs px-2'} src={require('../Photos/Taichung/index.jpg')}/>
                        <p className={'font-bold text-indigo-400 text-2xl'}>台中</p>
                    </Link>
                </div>
                <div className={'flex flex-row my-3'}>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/Train'}>
                        <img className={'imgs px-2'} src={require('../Photos/Train/index.jpg')}></img>
                        <p className={'font-bold text-indigo-400 text-2xl'}>十分車站</p>
                    </Link>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/cake'}>
                        <img className={'imgs px-2'} src={require('../Photos/cake/index.jpg')}/>
                        <p className={'font-bold text-indigo-400 text-2xl'}>做蛋糕</p>
                    </Link>
                </div>
                <div className={'flex flex-row my-3'}>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/Bali'}>
                        <img className={'imgs px-2'} src={require('../Photos/Bali/index.jpg')}/>
                        <p className={'font-bold text-indigo-400 text-2xl'}>八里</p>
                    </Link>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/banchao'}>
                        <img className={'imgs px-2'} src={require('../Photos/banchao/index.jpg')}/>
                        <p className={'font-bold text-indigo-400 text-2xl'}>耶誕城</p>
                    </Link>
                </div>
                <div className={'flex flex-row my-3'}>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/forest'}>
                        <img className={'imgs px-2'} src={require('../Photos/forest/index.jpg')}/>
                        <p className={'font-bold text-indigo-400 text-2xl'}>植物園</p>
                    </Link>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/Giaofan'}>
                        <img className={'imgs px-2'} src={require('../Photos/Giaofan/index.jpg')}/>
                        <p className={'font-bold text-indigo-400 text-2xl'}>九份</p>
                    </Link>
                </div>
                <div className={'flex flex-row my-3'}>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/saosan'}>
                        <img className={'imgs px-2'} src={require('../Photos/saosan/index.jpg')}/>
                        <p className={'font-bold text-indigo-400 text-2xl'}>爬山</p>
                    </Link>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/Shichu'}>
                        <img className={'imgs px-2'} src={require('../Photos/Shichu/index.jpg')}/>
                        <p className={'font-bold text-indigo-400 text-2xl'}>新竹</p>
                    </Link>
                </div>
            </div>
        </div>

    )
}