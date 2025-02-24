import {motion} from 'framer-motion'

import { IconButton } from './Button'
import { SendHorizontal } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'
const PromptField = () => {

    // 'inputField' and 'inputFieldContainer' holds the reference to the input field and its container respectively
    const inputField = useRef();
    const inputFieldContainer = useRef();

    // State for the input field value
    const [placeholderShown , setPlaceholderShown] = useState(true);

    const [isMultiLine, setIsMultiLine] = useState(false);


    //Handle input Field Change
    const handleInputChange = useCallback(() => {
        if(inputField.current.innerText === '\n'){
            inputField.current.innerHTML = '';
        }



        setPlaceholderShown(inputField.current.innerText.length === 0);
        setIsMultiLine(inputFieldContainer.current.clientHeight > 64);
    }, []);

    const promptFieldVariants = {
        hidden: {
            scaleX: 0,
        },
        visible: {
            scaleX: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
                delay: 0.4,
                duration: 0.4,
                ease: [0.05, 0.7, 0.1, 1]
            }
        }
    }

    const promptFieldChildrenVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
        
    }



  return (
    <motion.div 
        variants={promptFieldVariants} 
        initial='hidden'
        animate='visible'
        className={`prompt-field-container ${isMultiLine ? 'rounded-large' : ''}`}
        ref={inputFieldContainer}
        >
        <motion.div 
              className={`prompt-field ${placeholderShown ? '' : 'after:hidden'}`} 
            contentEditable={true}
            role='textbox'
            aria-multiline={true}
            aria-label='Enter your prompt here'
            data-placeholder='Enter your prompt here'
            variants={promptFieldChildrenVariants}
            onInput={handleInputChange}
            ref={inputField}
             />

        <IconButton
          icon={<SendHorizontal />}
          size='small'
          classes='ms-auto '
          title='Submit'
          variants={promptFieldChildrenVariants}
        />

        <div className="state-layer"></div>
    </motion.div>
  )
}

export default PromptField