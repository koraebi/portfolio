import { useTranslations } from 'next-intl';
import Image from 'next/image';
import BR from '../components/BR';
import pictureMeBoat from '/public/meBoat.jpeg';
import pictureMeLaptop from '/public/meLaptop.jpeg';
import pictureMeTower from '/public/meTower.jpeg';
import picturePartDesigner from '/public/partDesigner.png';
import picturePartEngineer from '/public/partEngineer.png';
import { ResumeLink } from '../constants/common';

export default function AboutLayout() {
  const t: any = useTranslations('about');

  return (
    <main className="flex flex-col p-5 pt-10 lg:px-40">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:p-10 lg:gap-10 place-items-center">
        <section className="w-full text-center lg:text-left">
          <h1 className="font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl">
            {t('about')}
          </h1>
          <p className="text-lg mb-1">
            {t('aboutSubtitle1')}<BR/>
            {t('aboutSubtitle2')}
          </p>
          <p className="font-light mb-4">
            {t('aboutDescription1')}<BR/>
            {t('aboutDescription2')}<BR/>
            {t('aboutDescription3')}<BR/>
            {t('aboutDescription4')}
          </p>
          <a href={ResumeLink} target="_blank">
            <button 
              className="rounded-full bg-lightBlack p-2 px-4 text-white">
              {t('aboutButton')}
            </button>
          </a>
        </section>
        <Image className="object-contain mb-5 lg:mb-0 h-[200px] lg:h-[350px] w-auto drop-shadow-lg" src={pictureMeBoat} alt=""/>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0"/>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:p-10 lg:gap-10 place-items-center">
        <Image className="object-contain mb-5 lg:mb-0 h-[200px] lg:h-[400px] w-full drop-shadow-lg" src={picturePartEngineer} alt=""/>
        <section className="col-span-2 ml-auto">
          <h1 className="font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl text-center lg:text-left">
            {t('partEngineer')}
          </h1>
          <p className="text-lg">
            {t('references')}
          </p>
          <p className="font-light mb-2">
            {t('referenceEngineer1')}<br/>
            {t('referenceEngineer2')}<br/>
            {t('referenceEngineer3')}<br/>
            {t('referenceEngineer4')}<br/>
            {t('referenceEngineer5')}<br/>
          </p>
          <p className="text-lg">
            {t('skills')}
          </p>
          <p className="font-light">
            {t('skillEngineer1')}<br/>
            {t('skillEngineer2')}<br/>
            {t('skillEngineer3')}<br/>
            {t('skillEngineer4')}<br/>
            {t('skillEngineer5')}<br/>
            {t('skillEngineer6')}<br/>
            {t('skillEngineer7')}<br/>
            {t('skillEngineer8')}<br/>
          </p>
        </section>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0"/>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:p-10 lg:gap-10 place-items-center">
        <section className="col-span-2 w-full">
          <div>
            <h1 className="font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl text-center lg:text-left">
              {t('partDesigner')}
            </h1>
          </div>
          <p className="text-lg">
            {t('references')}
          </p>
          <p className="font-light mb-2">
            {t('referenceDesigner1')}<br/>
            {t('referenceDesigner2')}<br/>
            {t('referenceDesigner3')}<br/>
            {t('referenceDesigner4')}<br/>
            {t('referenceDesigner5')}<br/>
          </p>
          <p className="text-lg">
            {t('skills')}
          </p>
          <p className="font-light">
            {t('skillDesigner1')}<br/>
            {t('skillDesigner2')}<br/>
            {t('skillDesigner3')}<br/>
            {t('skillDesigner4')}<br/>
            {t('skillDesigner5')}<br/>
            {t('skillDesigner6')}<br/>
            {t('skillDesigner7')}<br/>
            {t('skillDesigner8')}<br/>
          </p>
        </section>
        <Image className="object-contain mb-5 lg:mb-0 h-[200px] lg:h-[400px] w-full drop-shadow-lg" src={picturePartDesigner} alt=""/>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0"/>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:p-10 lg:gap-10 place-items-center">
        <Image className="object-contain h-[200px] lg:h-[350px] w-full drop-shadow-lg mb-5 lg:mb-0" src={pictureMeLaptop} alt=""/>
        <section className="w-full text-center lg:text-right">
          <h1 className="font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl">
            {t('randomFacts')}
          </h1>
          <p className="text-lg mb-1">
            {t('randomFactsSubtitle')}
          </p>
          <p className="font-light">
            {t('randomFact1')}<br/>
            {t('randomFact2')}<br/>
            {t('randomFact3')}<br/>
            {t('randomFact4')}<br/>
            {t('randomFact5')}<br/>
          </p>
        </section>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0"/>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:p-10 lg:gap-10 place-items-center">
        <section className="w-full text-center lg:text-left">
          <h1 className="font-extrabold mb-1 lg:mb-2 text-2xl lg:text-5xl">
            {t('myStory')}
          </h1>
          <p className="text-lg mb-1">
            {t('myStorySubtitle')}
          </p>
          <p className="font-light mb-4">
            {t('myStoryDescription1')}<BR/>
            {t('myStoryDescription2')}
          </p>
          <a className="rounded-full bg-lightBlack p-2 px-4 text-white" href="/story">
            {t('myStoryButton')}
          </a>
        </section>
        <Image className="object-contain h-[200px] lg:h-[350px] w-full drop-shadow-lg mb-5 lg:mb-0" src={pictureMeTower} alt=""/>
      </div>
    </main>
  );
}