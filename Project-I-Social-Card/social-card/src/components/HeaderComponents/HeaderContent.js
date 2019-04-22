import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
// import ImgThumb from './ImageThumbnail';

const HeaderContent = () => {
    return(
        <div className="hcont">
            <HeaderTitle/>
            {/*<ImgThumb/>*/}
        </div>
    )
}
export default HeaderContent;