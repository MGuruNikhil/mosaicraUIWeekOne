
const Sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];

const SlidingSwitch = ({
    Size = 'md',
    OnBg = '#85ff7a',
    OffBg = '#ff7a7a',
    SliderColor = '#15202a'
}) => {

    let width = 20;

    if(Sizes.includes(Size)) {
        switch(Size) {
            case 'xs':
                width = 10;
                break;
            case 'sm':
                width = 15;
                break;
            case 'md':
                width = 20;
                break;
            case 'lg':
                width = 25;
                break;
            case 'xl':
                width = 30;
                break;
            case '2xl':
                width = 35;
                break;
            case '3xl':
                width = 40;
                break;
            default:
                width = 20;
                break;
        }
    } else {
        width = 20;
    }

    return (
        <div>
            <input type="checkbox" />
            <style>{`
                input {
                    --s: ${width}px; /* adjust this to control the size*/
                    height: var(--s);
                    aspect-ratio: 2.5;
                    width: auto; /* some browsers need this */
                    border-radius: var(--s);
                    padding: calc(var(--s)/10);
                    margin: calc(var(--s)/2);
                    cursor: pointer;
                    background:
                        radial-gradient(farthest-side,${(!!SliderColor && SliderColor) || '#15202a'} 96%,#0000) 
                        var(--_p,0%)/var(--s) content-box no-repeat,
                        var(--_c,${(!!OffBg && OffBg) || '#ff7a7a'});
                    box-sizing: content-box;
                    transform-origin: calc(3*var(--s)/5) 50%;
                    transition: transform cubic-bezier(0,300,1,300) .5s,background .3s .1s ease-in;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
                input:checked {
                    --_c: ${(!!OnBg && OnBg) || '#85ff7a'};
                    --_p: 100%;
                    transform-origin: calc(100% - 3*var(--s)/5) 50%;
                    transform: rotate(0.1deg);
                }
            `}</style>
        </div>
    )
}

export default SlidingSwitch;