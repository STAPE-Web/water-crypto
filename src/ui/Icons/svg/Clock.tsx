const Clock = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 30 30"
            {...props}
        >
            <path
                fill="currentColor"
                d="M15 3a12 12 0 1012 12A12.013 12.013 0 0015 3zm0 22.154A10.154 10.154 0 1125.154 15 10.165 10.165 0 0115 25.154zM22.385 15a.923.923 0 01-.924.923H15a.923.923 0 01-.923-.923V8.538a.923.923 0 011.846 0v5.539h5.539a.923.923 0 01.923.923z"
            ></path>
        </svg>
    )
}

export default Clock