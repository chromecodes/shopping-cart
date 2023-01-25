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
      <div className='credit text-4xl p-8 rounded-3xl text-zinc-600 w-2/4 h-4/5 bg-zinc-900  '>
        <div className='w-full h-full'>
          <div className='l1 flex justify-between'>
            <span>Credits</span>
            <RiCloseFill
              onClick={hideCredits}
              className=' h-10 w-10 text-zinc-500 cursor-pointer'
            />
          </div>
          <div className='l2 h-[90%]'>
            <div className='pl-5 nums1 text-3xl'>
              Backgrounds
              <ol className='credit pl-5 text-2xl overflow-y-scroll grid grid-cols-2 '>
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
            <div className='pl-5 h-[90%] nums1 text-3xl'>
              Items
              <ol className='credit pl-5 text-2xl h-[95%] overflow-y-scroll grid grid-cols-2 '>
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
                  <a href='https://pixabay.com/users/simonprodl-143860/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=843461'>
                    Simon Blüthenkranz
                  </a>{" "}
                  from{" "}
                  <a href='https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=843461'>
                    Pixabay
                  </a>{" "}
                </li>{" "}
                <li>
                  Image by{" "}
                  <a href='https://pixabay.com/users/ianvanderlinde-11469181/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6571362'>
                    Ian van der Linde
                  </a>{" "}
                  from{" "}
                  <a href='https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6571362'>
                    Pixabay
                  </a>{" "}
                </li>{" "}
                <li>
                  Image by{" "}
                  <a href='https://pixabay.com/users/dimhou-5987327/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4053962'>
                    Dim Hou
                  </a>{" "}
                  from{" "}
                  <a href='https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4053962'>
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
                  Image by{" "}
                  <a href='https://pixabay.com/users/futuremoon-1532200/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7578025'>
                    Jaime Perez
                  </a>{" "}
                  from{" "}
                  <a href='https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7578025'>
                    Pixabay
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
                <li>wall </li>{" "}
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
                  <a href='https://unsplash.com/photos/BAlId0HSOdM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  {" "}
                  Photo by :
                  <a href='https://www.pexels.com/photo/turned-on-grey-table-lamp-1643280/'>
                    Dorran
                  </a>
                </li>{" "}
                <li>
                  {" "}
                  Photo by{" "}
                  <a href='https://unsplash.com/ja/@lumachrome?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Renè Müller
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/0dOKtrTX0Yc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@mak_jp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Mak
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/Sy_qwu-7n2I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@mak_jp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Mak
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/Sy_qwu-7n2I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by{" "}
                  <a href='https://unsplash.com/@jerry_318?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Jerry Wang
                  </a>{" "}
                  on{" "}
                  <a href='https://unsplash.com/photos/If31FcfN_HM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                    Unsplash
                  </a>{" "}
                </li>{" "}
                <li>
                  Photo by :
                  <a href='https://www.pexels.com/photo/white-light-lamps-turned-on-during-night-9817389/'>
                    Plato Terentev
                  </a>
                </li>{" "}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
