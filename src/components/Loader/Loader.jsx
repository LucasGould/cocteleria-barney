import { Oval } from "react-loader-spinner"

export const Loader = () => (<Oval
    ariaLabel='loading-indicator'
    height={120}
    width={120}
    strokeWidth={5}
    strokeWidthSecondary={1}
    color='black'
    secondaryColor='white'
    wrapperStyle={{
        marginTop: "250px",
        alignSelf: "center",
        justifyContent: "center",
    }}
/>)