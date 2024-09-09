const WaterBTC = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="35"
            fill="none"
            viewBox="0 0 28 35"
            {...props}
        >
            <path
                fill="#2F88FF"
                stroke="#F7931A"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 33c6.904 0 12.5-5.047 12.5-11.273C26.5 15.621 22.333 9.045 14 2 5.667 9.045 1.5 15.621 1.5 21.727 1.5 27.953 7.096 33 14 33z"
            ></path>
            <path
                fill="#000"
                d="M14.429 12h1.857v1.667h1.857v1.666h-7.429v3.334h7.429v1.666h-7.429v3.334h7.429v1.666h-1.857V27h-1.857v-1.667H12.57V27h-1.857v-1.667H7v-1.666h1.857v-3.334H7v-1.666h1.857v-3.334H7v-1.666h3.714V12h1.857v1.667h1.858V12zm3.714 11.667v-3.334H20v3.334h-1.857zm0-5v-3.334H20v3.334h-1.857z"
            ></path>
        </svg>
    )
}

export default WaterBTC