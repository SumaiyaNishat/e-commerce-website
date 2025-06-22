import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import Delivery from "../../Components/Delivery/Delivery";



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
             <div className="brand">
                <Brand></Brand>

             </div>
        </div>
    )
}

export default Home;