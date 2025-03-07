export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

                <h1 className="font-head text-3xl">
                    Portfolio
                </h1>

                <h1>my_first_react_website</h1>
                <p>welcome :)</p>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://github.com/moerastrid/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go to my github (moerastrid) →
                </a>
            </footer>
        </div>
    );
}
