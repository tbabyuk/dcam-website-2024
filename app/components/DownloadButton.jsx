


import {AiFillFilePdf} from "react-icons/ai"


export const DownloadButton = ({text, file}) => {
    return ( 
        <div className="grid place-items-center">
            <a href={`/downloads/${file}`} download className="dcam-download-btn"><AiFillFilePdf size="1.2em" />&nbsp;{text}</a>
        </div>
     );
}