

import { useLoaderData } from "react-router-dom"
import {motion} from "framer-motion"

const Greeting = () => {

    const { user } = useLoaderData();

  return (
    <div className="grid h-full place-content-center">
        <h2 className="text-center text-headlineLarge font-semibold tracking-tight text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant">
            <motion.span initial={{ backgroundPositionX: "100%" }}
            animate={{ backgroundPositionX: "0%" }} transition={{ duration: 4, ease: [0.05, 0.7, 0.1, 1] }}  className="via-56% bg-gradient-to-r from-pink-400 from-0% via-dark-onPrimaryFixedVariant to-transparent to-75% bg-[length:350%_100%] bg-clip-text bg-[100%_0%] text-transparent dark:from-dark-primary dark:to-dark-onPrimary">Hello, {user.name.split(' ').at()}</motion.span>
            <br />
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 ,ease: "easeOut" }}
            className="dark:font-medium">How can I help you today?</motion.span>
        </h2>
    </div>
  )
}

export default Greeting