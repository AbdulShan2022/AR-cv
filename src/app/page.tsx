import { resume } from 'src/content';
import './global.css';
import { LeftSection } from './lib/ui-component/LeftSection';
import { RightSection } from './lib/ui-component/RightSection';
export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="container">
      <div className=" main ">
        <div className="left-side">
          <LeftSection content={resume} />
        </div>
        <div className="right-side">
          <RightSection content={resume} />
        </div>
      </div>
    </div>
  );
}
