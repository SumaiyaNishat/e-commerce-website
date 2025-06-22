import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import Delivery from "../../Components/Delivery/Delivery";
import Features from "../../Components/Features/Features";



const Home = () => {
    return (
        <div>
            

            {/* banner componet*/}
            <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
                <Banner></Banner>
            </div>
            
            {/* delivery componet*/}
            <div className="delivery_component w-full min-h-[#150px]">
                <Delivery></Delivery>
            </div>

             {/* delivery componet*/}
             <div className="brand flex items-center h-[171px] justify-center w-full mt-8 mb-8">
                <Brand></Brand>
                </div>

                {/* features componet*/}
             <div className="w-full flex items-center justify-center mb-[80px]">
                <Features></Features>
                </div>
        </div>
    )
}

export default Home;