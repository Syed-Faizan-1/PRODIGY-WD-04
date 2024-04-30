import cppSvg from '../skill-svgs/cpp.svg';
import csharpSvg from '../skill-svgs/csharp.svg';
import htmlSvg from '../skill-svgs/html.svg';
import cssSvg from '../skill-svgs/css.svg';
import bootstrapSvg from '../skill-svgs/bootstrap.svg';
import javascriptSvg from '../skill-svgs/javascript.svg';
import jquerySvg from '../skill-svgs/jquery.svg';
import typescriptSvg from '../skill-svgs/typescript.svg';
import aspdotnetSvg from '../skill-svgs/aspdotnet.svg';
import angularSvg from '../skill-svgs/angular.svg';
import reactSvg from '../skill-svgs/react.svg';
import jsxSvg from '../skill-svgs/jsx.svg';
import mysqlSvg from '../skill-svgs/mysql.svg';
import gitSvg from '../skill-svgs/git.svg'; // Add Git SVG import
import sqlSvg from '../skill-svgs/sql.svg';
import githubSvg from '../social-svgs/github.svg'; // Add GitHub SVG import
import pythonSvg from '../skill-svgs/python.svg'
import netlifySvg from '../skill-svgs/netlify.svg'
import tailwindSvg from '../skill-svgs/tailwind.svg'
import commercejsSvg from '../skill-svgs/commercejs.svg'

function SkillSet() {
    return (
        <section className="SkillSet mt-8 flex justify-center">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Skill Set</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Frontend Skills */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Frontend</h2>
                        <div className="grid grid-cols-4 gap-4 justify-items-center">
                            <img src={htmlSvg} alt="HTML" className="w-12 h-12" />
                            <img src={cssSvg} alt="CSS" className="w-12 h-12" />
                            <img src={bootstrapSvg} alt="Bootstrap" className="w-12 h-12" />
                            <img src={javascriptSvg} alt="JavaScript" className="w-12 h-12" />
                            <img src={jquerySvg} alt="jQuery" className="w-12 h-12" />
                            <img src={angularSvg} alt="Angular" className="w-12 h-12" />
                            <img src={reactSvg} alt="React" className="w-12 h-12" />
                            <img src={jsxSvg} alt="JSX" className="w-12 h-12" />
                            <img src={tailwindSvg} alt="Tailwind" className="w-12 h-12" />

                        </div>
                    </div>
                    {/* Backend Skills */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Backend</h2>
                        <div className="grid grid-cols-3 gap-4 justify-items-center">
                            <img src={csharpSvg} alt="C#" className="w-12 h-12" />
                            <img src={aspdotnetSvg} alt=".NET" className="w-12 h-12" />
                            <img src={javascriptSvg} alt="JavaScript" className="w-12 h-12" />
                            <img src={commercejsSvg} alt="commerce.Js" className="w-30 h-12" />

                        </div>
                    </div>
                    {/* Languages */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Languages</h2>
                        <div className="grid grid-cols-4 gap-4 justify-items-center">
                            <img src={cppSvg} alt="C++" className="w-12 h-12" />
                            <img src={csharpSvg} alt="C#" className="w-12 h-12" />
                            <img src={javascriptSvg} alt="JavaScript" className="w-12 h-12" />
                            <img src={typescriptSvg} alt="TypeScript" className="w-12 h-12" />
                            <img src={pythonSvg} alt="Python" className="w-12 h-12" />
                            <img src={gitSvg} alt="Git" className="w-12 h-12" /> {/* Add Git icon */}
                        </div>
                    </div>
                    {/* Databases */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Databases</h2>
                        <div className="grid grid-cols-4 gap-4 justify-items-center">
                            <img src={mysqlSvg} alt="MySQL" className="w-12 h-12" />
                            <img src={sqlSvg} alt="SQL" className="w-12 h-12" />
                        </div>
                    </div>
                    {/* Version Control */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Version Control</h2>
                        <div className="grid grid-cols-4 gap-4 justify-items-center">
                            <img src={gitSvg} alt="Git" className="w-12 h-12" />
                            <img src={githubSvg} alt="GitHub" className="w-12 h-12" /> {/* Add GitHub icon */}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Deployment</h2>
                        <div className="grid grid-cols-4 gap-4 justify-items-center">
                            <img src={netlifySvg} alt="Netlify" className="w-12 h-12" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillSet;
