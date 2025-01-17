import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const Abonnement = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        fill="none"
    >
        <G
            {...props}
            // stroke="#214184"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        >
            <Path d="M30 2.572v6.857M33.429 6H26.57M24 16.286 12 9.429m7.7-2.457 8.572 4.898A3.429 3.429 0 0 1 30 14.848v8.019a3.429 3.429 0 0 1-1.728 2.978l-8.571 4.897a3.43 3.43 0 0 1-3.402 0l-8.571-4.897A3.428 3.428 0 0 1 6 22.867v-8.02a3.428 3.428 0 0 1 1.728-2.977l8.571-4.898a3.429 3.429 0 0 1 3.402 0Z" />
            <Path d="m6.857 13.714 9.518 5.126a3.428 3.428 0 0 0 3.25 0l9.518-5.126m-11.143 6v11.143" />
        </G>
    </Svg>
)
export default Abonnement
