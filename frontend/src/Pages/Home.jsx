import LargeWithAppLinksAndSocial from "../components/footer"
import Simple from "../components/navbar"
import GridListWith from "../components/Middle"
import CaptionCarousel from "../components/Crouser"

function HomePage() {
    return (
        <div>
            <Simple />
            <CaptionCarousel />
            <GridListWith />
            <LargeWithAppLinksAndSocial />

        </div>
    )
}
export default HomePage