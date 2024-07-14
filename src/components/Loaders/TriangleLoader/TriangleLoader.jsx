
const Sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];

const TriangleLoader = ({
    Size = 'md',
    Color = '#00ADB5',
    Dot1Color = '',
    Dot2Color = '',
    Dot3Color = ''
}) => {

    let width = 20;
    let dotWidth = 6;

    if(Sizes.includes(Size)) {
        switch(Size) {
            case 'xs':
                width = 10;
                dotWidth = 4;
                break;
            case 'sm':
                width = 15;
                dotWidth = 5;
                break;
            case 'md':
                width = 20;
                dotWidth = 6;
                break;
            case 'lg':
                width = 25;
                dotWidth = 6;
                break;
            case 'xl':
                width = 30;
                dotWidth = 7;
                break;
            case '2xl':
                width = 40;
                dotWidth = 8;
                break;
            case '3xl':
                width = 50;
                dotWidth = 9;
                break;
            default:
                width = 30;
                dotWidth = 5;
                break;
        }
    } else {
        width = 20;
        dotWidth = 6;
    }

    const root3 = Math.sqrt(3);
    const height = (root3*width)/2;

    return (
        <div className="nik">
            <div className="dots t1"></div>
            <div className="dots t2"></div>
            <div className="dots t3"></div>
            <style>{`
                .nik {
                    position: relative;
                    width: ${width}px;
                    height: ${height}px;
                    margin: ${dotWidth}px;
                }

                .dots {
                    width: ${dotWidth}px;
                    background-color: ${(!!Color && Color) || '#00ADB5'};
                    height: ${dotWidth}px;
                    border-radius: 50%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: block;
                }

                .dots.t1 {
                    ${(Dot1Color && 'background-color: '+Dot1Color+';')}
                    transform: translate(${width / 2}px, 0px);
                    animation: dotTriangle1 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
                }

                .dots.t2 {
                    ${(Dot2Color && 'background-color: '+Dot2Color+';')}
                    transform: translate(${width}px, ${height}px);
                    animation: dotTriangle2 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
                }

                .dots.t3 {
                    ${(Dot3Color && 'background-color: '+Dot3Color+';')}
                    transform: translate(0px, ${height}px);
                    animation: dotTriangle3 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
                }

                @keyframes dotTriangle1 {
                    33% {
                        transform: translate(${width}px, ${height}px);
                    }
                    66% {
                        transform: translate(0px, ${height}px);
                    }
                    100% {
                        transform: translate(${width / 2}px, 0px);
                    }
                }

                @keyframes dotTriangle2 {
                    33% {
                        transform: translate(0px, ${height}px);
                    }
                    66% {
                        transform: translate(${width / 2}px, 0px);
                    }
                    100% {
                        transform: translate(${width}px, ${height}px);
                    }
                }

                @keyframes dotTriangle3 {
                    33% {
                        transform: translate(${width / 2}px, 0px);
                    }
                    66% {
                        transform: translate(${width}px, ${height}px);
                    }
                    100% {
                        transform: translate(0px, ${height}px);
                    }
                }
            `}</style>
        </div>
    );
}

export default TriangleLoader;
