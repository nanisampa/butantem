import { useRouter } from 'next/router'

import {
    WhatsappShareButton,
    WhatsappIcon,
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
} from "react-share";

function ShareButtons({ project }) {
    const router = useRouter()
    const url = `https://butantem.com${router.asPath}`
    const text = `Apoya a ${project.nombre} durante esta Pandemia. Conheça mais sobre este e outros projetos do ButanTem.`
    return (
        <div className="flex flex-col">
            <h4 className="text-xl font-medium text-gray-800 self-start font-serif mb-2">Compartilhe</h4>
            <div className="flex flex-row justify-evenly">
                <FacebookShareButton url={url} quote={text}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <WhatsappShareButton title={text} url={url}>
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <TwitterShareButton title={text} url={url} related={['mexvscovid19']}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton summary={text} url={url}>
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>

        </div>
    )
};

export default ShareButtons;
