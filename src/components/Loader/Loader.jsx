import { Oval } from "react-loader-spinner"

const LoaderStyle = {"margin-top": "100px",}

export const Loader = () => (<Oval
    ariaLabel="loading-indicator"
    height={120}
    width={120}
    strokeWidth={5}
    strokeWidthSecondary={1}
    color="black"
    secondaryColor="white"
    wrapperStyle= {{LoaderStyle}}
  />)