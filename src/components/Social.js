import githubSvg from '../social-svgs/github.svg';
import gmailSvg from '../social-svgs/gmail.svg';
import linkedinSvg from '../social-svgs/linkedin.svg';
import instagramSvg from '../social-svgs/instagram.svg';
import facebookSvg from '../social-svgs/facebook.svg';

function Social() {
  function onClickGmail() {
      window.location.href = 'mailto:faaiz290302@gmail.com';
  }
  function onClickLinkedin() {
      window.open('https://www.linkedin.com/in/syedfaaiz', '_blank');
  }

  function onClickInstagram() {
      window.open('https://www.instagram.com/syedfaaiz88/', '_blank');
  }

  function onClickFacebook() {
      window.open('https://www.facebook.com/syedfaaiz88', '_blank');
  }

  function onClickGithub() {
      window.open('https://github.com/Syed-Faizan-1', '_blank');
  }

  return (
      <section className="Social mt-8 flex justify-center">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full">
              <h1 className="text-2xl font-bold mb-4">Socials</h1>
              <div className="grid grid-cols-5 gap-4 justify-items-center">
                  <img src={gmailSvg} alt="gmail" className="w-8 cursor-pointer" onClick={onClickGmail} />
                  <img src={linkedinSvg} alt="linkedin" className="w-8 cursor-pointer" onClick={onClickLinkedin} />
                  <img src={instagramSvg} alt="instagram" className="w-8 cursor-pointer" onClick={onClickInstagram} />
                  <img src={facebookSvg} alt="facebook" className="w-8 cursor-pointer" onClick={onClickFacebook} />
                  <img src={githubSvg} alt="github" className="w-8 cursor-pointer" onClick={onClickGithub} />
              </div>
          </div>
      </section>
  );
}

export default Social;
