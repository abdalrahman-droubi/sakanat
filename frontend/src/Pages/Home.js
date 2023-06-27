import { AppComingSoon } from "../Components/Home/AppComingSoon";
import HeroSection from "../Components/Home/HeroSection";
import ServiceSection from "../Components/Home/ServiceSection";
import WelcomeSection from "../Components/Home/WelcomeSection";
function Home() {
    return ( 
        <>
        <HeroSection/>
        <WelcomeSection/>      
        <ServiceSection/> 
        <AppComingSoon/> 
        </>
     );
}

export default Home;