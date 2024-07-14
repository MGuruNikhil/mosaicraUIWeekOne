import CircularSpinner from "./components/Loaders/CircularSpinner/CircularSpinner"
import TriangleLoader from "./components/Loaders/TriangleLoader/TriangleLoader"
import SlidingSwitch from "./components/ToggleSwitches/SlidingSwitch/SlidingSwitch"
import ExpandingSwitch from "./components/ToggleSwitches/ExpandingSwitch/ExpandingSwitch"

function App() {

    return (
        <div className="flex items-center justify-center h-screen bg-black gap-4">
            <CircularSpinner Size="lg" Thickness="lg" StrokeHex="#93bfec" CapShape="round" />
            <ExpandingSwitch Size="lg" OnBg="" OffBg="" Shape="" />
            <TriangleLoader Size="lg" Color="" Dot1Color="" Dot2Color="" Dot3Color="" />
            <SlidingSwitch Size="lg" OnBg="" OffBg="" SliderColor="" />
        </div>
    )
}

export default App
