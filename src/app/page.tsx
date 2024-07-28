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
      <div className=" main grid grid-rows-1 grid-flow-col">
        <div className="left-side p-2 col-span-1">
          <LeftSection content={resume} />
        </div>
        <div className="right-side col-span-7">
          <RightSection content={resume} />
        </div>
      </div>
    </div>
  );
}
