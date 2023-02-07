import React, {useState} from "react";
import '../App.css';
import ImageGallery from 'react-image-gallery';
import {Link} from "react-router-dom";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    SwipeableDrawer, TextField
} from "@mui/material";
import {toast, Toaster} from "react-hot-toast";
import posts from '../Datas/Posts.json'
export default  function Home(){
    const [MenuState,setMenuState]=useState(false);
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
    const [Name,setName]=useState('');
    const [Content,setContent]=useState('');
    const [DialogState,setDialogState]=useState(false);
     const handleClose=()=>{
         setDialogState(false);
     }
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (DialogState) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [DialogState]);
    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setMenuState(open);
    };
    const handleSubmit=()=>{
        if(Name===''){
            return toast.error('Name Required !!!');
        }
        if(Content===''){
            return toast.error('Content Required !!!');
        }

    }
    return(
        <div className={'container mx-auto flex items-center flex-col'} style={{backgroundColor:'rgb(34,34,34)'}}>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className={'title text-justify py-10 font-bold flex flex-row justify-around w-11/12'}>
                <Button className={'p-1 rounded-full border-2 shadow-2xl'} style={{backgroundColor:'rgb(255, 255, 255)',border:'2px solid rgba(255, 255, 255, 0.3)'}} onClick={()=>{setMenuState(!MenuState);}}>
                    <img src={require('../Photos/icons/menu.png')}/>
                </Button>
                <h4 className="text-5xl p-1 font-bold text-center text-white">Xiao & Wei</h4>
                <Button className={'p-1 rounded-full border-2 shadow-2xl'} style={{backgroundColor:'rgb(255, 255, 255)',border:'2px solid rgba(255, 255, 255, 0.3)'}} onClick={()=>{setDialogState(!DialogState);}}>
                    <img src={require('../Photos/icons/post.png')}/>
                </Button>
            </div>

            <React.Fragment>
                <SwipeableDrawer
                    anchor='left'
                    open={MenuState}
                    onClose={toggleDrawer( false)}
                    onOpen={toggleDrawer( true)}
                >
                    {<div className={'items-center text-center flex flex-col'}>
                        <div className={'text-2xl py-5 bg-gray-700 rounded-xl text-white px-12 my-1'}>Menu</div>
                        <div className={'mx-3 text-2xl py-5 bg-gray-700 rounded-xl text-white px-12 my-1 flex flex-col'}>
                            <Link to={'/'} className={'text-xl p-5'}>首頁</Link>
                            <Link to={'/Ferris'} className={'text-xl p-5'}>美麗華</Link>
                            <Link to={'/Taichung'} className={'text-xl p-5'}>台中</Link>
                            <Link to={'/Train'} className={'text-xl p-5'}>十分車站</Link>
                            <Link to={'/cake'} className={'text-xl p-5'}>做蛋糕</Link>
                            <Link to={'/Bali'} className={'text-xl p-5'}>八里</Link>
                            <Link to={'/banchao'} className={'text-xl p-5'}>耶誕城</Link>
                            <Link to={'/forest'} className={'text-xl p-5'}>植物園</Link>
                            <Link to={'/Giaofan'} className={'text-xl p-5'}>九份</Link>
                            <Link to={'/saosan'} className={'text-xl p-5'}>爬山</Link>
                            <Link to={'/Shichu'} className={'text-xl p-5'}>台中</Link>
                            <Link to={'/Gioxi'} className={'text-xl p-5'}>礁溪</Link>
                        </div>
                    </div>}
                </SwipeableDrawer>
            </React.Fragment>

            <ImageGallery autoPlay={false} useBrowserFullscreen={true} showPlayButton={false} items={images} ></ImageGallery>

            <div className={'glass my-5 text-justify items-center'}>
                <h3 className="text-4xl font-bold text-center mb-5">Routes we have been</h3>
                <div className={'flex flex-row my-3 mt-5'}>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/Ferris'}>
                        <img className={'imgs px-2'} src={require('../Photos/Ferris/index.jpg')}/>
                        <p className={'font-bold text-black text-2xl'}>美麗華</p>
                    </Link>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/Taichung'}>
                        <img className={'imgs px-2'} src={require('../Photos/Taichung/index.jpg')}/>
                        <p className={'font-bold text-black text-2xl'}>台中</p>
                    </Link>
                </div>
                <div className={'flex flex-row my-3'}>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/Train'}>
                        <img className={'imgs px-2'} src={require('../Photos/Train/index.jpg')}></img>
                        <p className={'font-bold text-black text-2xl'}>十分車站</p>
                    </Link>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/cake'}>
                        <img className={'imgs px-2'} src={require('../Photos/cake/index.jpg')}/>
                        <p className={'font-bold text-black text-2xl'}>做蛋糕</p>
                    </Link>
                </div>
                <div className={'flex flex-row my-3'}>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/Bali'}>
                        <img className={'imgs px-2'} src={require('../Photos/Bali/index.jpg')}/>
                        <p className={'font-bold text-black text-2xl'}>八里</p>
                    </Link>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/banchao'}>
                        <img className={'imgs px-2'} src={require('../Photos/banchao/index.jpg')}/>
                        <p className={'font-bold text-black text-2xl'}>耶誕城</p>
                    </Link>
                </div>
                <div className={'flex flex-row my-3'}>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/forest'}>
                        <img className={'imgs px-2'} src={require('../Photos/forest/index.jpg')}/>
                        <p className={'font-bold text-black text-2xl'}>植物園</p>
                    </Link>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/Giaofan'}>
                        <img className={'imgs px-2'} src={require('../Photos/Giaofan/index.jpg')}/>
                        <p className={'font-bold text-black text-2xl'}>九份</p>
                    </Link>
                </div>
                <div className={'flex flex-row my-3'}>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/saosan'}>
                        <img className={'imgs px-2'} src={require('../Photos/saosan/index.jpg')}/>
                        <p className={'font-bold text-black text-2xl'}>爬山</p>
                    </Link>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/Shichu'}>
                        <img className={'imgs px-2'} src={require('../Photos/Shichu/index.jpg')}/>
                        <p className={'font-bold text-black text-2xl'}>新竹</p>
                    </Link>
                </div>
                <div className={'flex flex-row my-3'}>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/Gioxi'}>
                        <img className={'imgs px-2'} src={require('../Photos/Gioxi/index.jpg')}/>
                        <p className={'font-bold text-black text-2xl'}>礁溪</p>
                    </Link>
                    <Link className={'flex flex-1 px-1 flex-col items-center'} to={'/'}>
                        <img className={'px-2'} style={{display:"block",width:'200px'}}/>
                        <p className={'font-bold text-black text-2xl'}></p>
                    </Link>
                </div>
            </div>
            <div className={'glass my-5 items-center justify-center'}>
                <h3 className="text-3xl font-bold text-center mb-5">我們說的話</h3>
                {posts.Posts.map((item, index)=>{
                    return(
                        <div className={'bg-white rounded-xl w-11/12 flex flex-col'} id={index}>
                            <div className={'flex mx-3 pt-2 border-b-black border-b-2'}>
                                <h1 className={'flex text-2xl font-bold flex-5'}>姓名 : </h1>
                                <h1 className={'flex flex-1 text-2xl font-bold whitespace-pre pl-2'}>{item.name}</h1>
                            </div>
                            <div className={'flex mx-3 py-2'}>
                                <h1 className={'flex text-2xl font-bold flex-5'}>內容 : </h1>
                                <h1 className={'flex flex-1 text-2xl whitespace-pre pl-2'}>{item.content}</h1>
                            </div>

                        </div>
                    )
                })}
            </div>

            <Dialog
                open={DialogState}
                onClose={handleClose}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">留下你的內容</DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <div className={'flex flex-col'}>
                            <TextField id="Name" label="Name*" margin={'dense'} variant="outlined" value={Name} onChange={(event)=>{setName(event.target.value);}}/>
                            <TextField id="Content" rows={10} multiline fullWidth label="Content" margin={'dense'} variant="outlined" onChange={(event)=>{setContent(event.target.value)}}/>
                        </div>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}