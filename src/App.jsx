/**
 * Components
 */
import PageTitle from './components/PageTitle';
import TopAppBar from './components/TopAppBar';
import Sidebar from './components/Sidebar';
import Greeting from './pages/Greeting';


import { useToggle } from './hooks/useToggle';

import {motion} from 'framer-motion';
import PromptField from './components/PromptField';

const App = () => {
  /**
   * Use a custom hook to manage the sidebar's show state.
   */
  const [isSidebarOpen, toggleSidebar] = useToggle();

  return (
    <>
      {/* Meta Tags  */}
      <PageTitle title='Home Page' />

      <div className='lg:grid lg:grid-cols-[320px,1fr]'>
        {/* SideBar */}
        <Sidebar 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
        />

        <div className='grid h-dvh grid-rows-[max-content,minmax(0,1fr),max-content]'>
          {/* Top app bar */}
          <TopAppBar toggleSidebar={toggleSidebar} />
          {/* Main Content */}
          <div className='flex flex-col overflow-y-auto px-5 pb-5'>
            <div className='mx-auto w-full max-w-[840px] grow'>
              <Greeting />
            </div>
          </div>

          {/* Prompt Field */}
          <div className='bg-light-background dark:bg-dark-background'>
            <div className="mx-auto w-full max-w-[870px] px-5">
              <PromptField />
              <motion.p 
                initial={{ opacity: 0, translateY: '-4px' }} 
                animate={{ opacity: 1, translateY: 0 }} 
                transition={{ duration: 0.2, delay: 0.8 ,ease: "easeOut" }} 
                className="p-3 text-center text-bodySmall text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant">
              AstraMind may produce inaccurate information about people, places,
              or facts so double check its response.
              
                <a
                  href='https://support.google.com/gemini?p=privacy_notice'
                  target='_blank'
                  className='ms-1 inline underline'
                >
                  Your Privacy and Gemini app
                </a>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
