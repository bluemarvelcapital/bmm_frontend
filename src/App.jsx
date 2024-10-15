import ImageSection from "./components/ImageSection";
import TextSection from "./components/TextSection";
function App() {
  return (
    // <div className="flex flex-col max-md:flex-col-reverse md:grid-cols-10 md:grid md:h-[100dvh] md:w-[100vw]">
    //   <TextSection />
    //   <ImageSection />
    // </div>
    <main className="font-Poppins w-full h-full flex justify-between">
            <div className="grid sm:grid-cols-12 bg-white w-full">
                <TextSection/>
                <ImageSection />
            
            </div>
        </main>
  );
}

export default App;
