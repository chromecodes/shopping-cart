import React from "react";
import { RiCloseFill } from "react-icons/ri";

const Credits = ({ hideCredits }) => {
  return (
    <div
      onClick={(e) => {
        console.log(e);
      }}
      className='creditCnt absolute w-screen h-screen glasses z-[3] flex justify-center items-center'
    >
      <div className='md:w-3/5 md:text-3xl credit text-2xl w-[95%] p-4 md:p-8 rounded-3xl text-zinc-600  h-4/5 bg-zinc-900  '>
        <div className='w-full h-full'>
          <div className='l1 flex justify-between'>
            <span>Credits</span>
            <RiCloseFill
              onClick={hideCredits}
              className=' h-10 w-10 text-zinc-500 cursor-pointer'
            />
          </div>
          <div className='l2 h-[90%]'>
            <div className='pl-5 nums1 md:text-2xl text-xl'>
              Backgrounds
              <ol className='credit md:text-xl pl-5 text-lg overflow-y-scroll grid grid-cols-2 '>
                <li>
                  Image by{" "}
                  <a href='https://pixabay.com/users/vy-18861/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=76124'>
                    cong yu
                  </a>{" "}
                  from{" "}
                  <a href='https://pixabay.com/photos/night-street-lamp-china-classical-76124/'>
                    Pixabay
                  </a>
                </li>
                <li>
                  {" "}
                  Photo by{" "}
                  <a href='https://unsplash.com/ko/@rt_hints?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Arthur Hinton
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/hAZotfko0xY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
              </ol>
            </div>
            <div className=' md:text-2xl pl-5 h-[90%] nums1 text-xl'>
              Items
              <ol className='credit  md:text-xl pl-5 text-lg h-[85%] xs:h-[89%] overflow-y-scroll gap-1 grid grid-cols-2 '>
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/fr/@beazy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Beazy
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/toX2sYnycCw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>
                </li>{" "}
                <li>
                  Image by{" "}
                  <a href='https://pixabay.com/users/simonprodl-143860/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=843461'>
                    Simon Blüthenkranz
                  </a>{" "}
                  from{" "}
                  <a href='https://pixabay.com/photos/bedside-lamp-light-bedside-table-843461/'>
                    Pixabay
                  </a>{" "}
                </li>{" "}
                <li>
                  Image by{" "}
                  <a href='https://pixabay.com/users/dimhou-5987327/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4053962'>
                    Dim Hou
                  </a>{" "}
                  from{" "}
                  <a href='https://pixabay.com/photos/lamp-lighting-decoration-light-4053962/'>
                    Pixabay
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@fiwol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Dmitriy K.
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/iCcyQWHv4hA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  Image by{" "}
                  <a href='https://pixabay.com/users/ianvanderlinde-11469181/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6571362'>
                    Ian van der Linde
                  </a>{" "}
                  from{" "}
                  <a href='https://pixabay.com/photos/bedside-table-lamp-bedroom-bed-6571362/'>
                    Pixabay
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/es/@andresjasso?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Andres Jasso
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/DR_A_zDkPHQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>
                </li>{" "}
                <li>
                  Image by{" "}
                  <a href='https://pixabay.com/users/futuremoon-1532200/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7578025'>
                    Jaime Perez
                  </a>{" "}
                  from{" "}
                  <a href='https://pixabay.com/photos/lamp-dark-night-home-decoration-7578025/'>
                    Pixabay
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@luronda_hege?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Luronda H
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/cHvZrkJrWbA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/ja/@simeonbirkenstock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Simeon Birkenstock
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/voO7hG54U90?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@casteunissen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Cas Teunissen
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/qXlY4GcfdeE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@swabdesign_official?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    swabdesign
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/a-dKi7SL8ms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>
                </li>
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@arturkornakov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Artur Kornakov
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/cpU3JRjiJwk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>
                </li>
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@wesleyshen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Wesley Shen
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/fEHErnpK1Y8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@insungyoon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    insung yoon
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/-yLHx_Qm-lo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/fr/@bundo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Bundo Kim
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/IStZpF3ZeiQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  Photo by{" "}
                  <a href='https://unsplash.com/@kiranck123?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Kiran CK
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/6hhPFXpuoWQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@adnonda?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Letizia Agosta
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/BAlId0HSOdM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@foxfox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Natalia Yakovleva
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/NMtyjqXdi0k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@pie06tro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Pietro Piovesan
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/9UR3Zafm328?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@adnonda?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Letizia Agosta
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/IeabWRt5ksw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>
                </li>
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@polarmermaid?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Anne Nygård
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/yld7ujjPRF8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>
                </li>
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/de/@rc820?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Chirayu Trivedi
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/FujGehh8SzE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@giorgiotrovato?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Giorgio Trovato
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/lrfXajlUo2E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>
                </li>
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/fr/@foxfox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Natalia Y.
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/R-qWnGTaAyU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
