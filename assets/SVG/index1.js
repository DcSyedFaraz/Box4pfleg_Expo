import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"
const Index1 = (props) => (
    <Svg
        fill="none"
        {...props}
    >
        <G stroke="#214184" strokeWidth={2.5}>
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.5 38.75h5.167m25.833 0v7.75c0 4.872 0 7.306-1.212 8.82-1.154 1.446-2.983 1.51-6.538 1.513m-18.083 0H15.5c-4.872 0-7.306 0-8.82-1.514-1.513-1.513-1.513-3.947-1.513-8.819v-5.167c0-4.872 0-7.305 1.514-8.82C8.194 31 10.628 31 15.5 31h5.167c4.872 0 7.305 0 8.82 1.514C31 34.028 31 36.46 31 41.334V46.5c0 4.872 0 7.306-1.514 8.82-1.514 1.513-3.947 1.513-8.82 1.513ZM46.5 5.167c-5.71 0-10.333 4.673-10.333 10.436 0 3.297 1.291 5.86 3.875 8.148 1.82 1.615 4.027 4.296 5.35 6.466.635 1.044 1.534 1.044 2.216 0 1.39-2.128 3.53-4.851 5.35-6.463 2.584-2.292 3.875-4.854 3.875-8.15 0-5.762-4.624-10.437-10.333-10.437Z"
            />
            <Circle cx={46.5} cy={15.5} r={3.25} />
        </G>
    </Svg>
)
export default Index1
