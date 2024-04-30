import Intro from './components/Intro';
import About from './components/About';
import Project from './components/Project';
import SkillSet from './components/SkillSet';
import Social from './components/Social';
import faaizstore from './project-imgs/faaizstore.png'
import sis01 from './project-imgs/sis01.png'
import sis02 from './project-imgs/sis02.png'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300 lg:px-20">
      <main className="container mx-auto px-4 flex-grow">
        <Intro />
        <section className="Project">
          <h1 className="text-2xl font-bold m-4 mt-4">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Project className="bg-gray-100 p-4 rounded" csharp html css typescript aspdotnet angular bootstrap mysql sql imgsrc={sis02}>Student Interest System #1</Project>
            <Project className="bg-gray-100 p-4 rounded" html css javascript jquery aspdotnet mysql sql imgsrc={sis01}>Student Interest System #2</Project>
            {/* <Project className="bg-gray-100 p-4 rounded" csharp html css javascript bootstrap aspdotnet mysql sql>Campus Management System</Project> */}
            <Project className="bg-gray-100 p-4 rounded" jsx javascript react tailwind commercejs netlify imgsrc={faaizstore} websiteLink={'https://faaizstore.netlify.app/'}>Faaiz Store</Project>

          </div>
        </section>
        <SkillSet />
        <About />
        <Social />
        <footer className="bg-gray-300 text-black text-center py-4 w-full mt-16">
          <p>© Syed Faizan. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
