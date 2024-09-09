const Wallet = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="31"
            fill="none"
            viewBox="0 0 36 31"
            {...props}
        >
            <path fill="currentColor" d="M24 16h3v5h-3v-5z"></path>
            <path
                fill="currentColor"
                d="M30 9.111V6.556C30 5.146 28.654 4 27 4H7.5C5.019 4 3 5.72 3 7.833v15.334C3 25.979 5.691 27 7.5 27H30c1.654 0 3-1.146 3-2.556V11.667c0-1.41-1.346-2.556-3-2.556zM7.5 6.556H27V9.11H7.5a1.628 1.628 0 01-1.018-.394 1.186 1.186 0 01-.416-.884c0-.329.149-.646.416-.884s.632-.379 1.018-.393zM30 24.444H7.518C6.825 24.43 6 24.195 6 23.167V11.43c.471.145.97.237 1.5.237H30v12.777z"
            ></path>
        </svg>
    )
}

export default Wallet