export default function TailCss() {
    return (
        <>
            <div>Hello</div>
            <div className="container bg-blue-500 mx-auto">World</div>
            {/*<div className="columns-2">*/}
            {/*    <p className="break-after-column">Well, let me tell you something, ...</p>*/}
            {/*    <p>Sure, go ahead, laugh...</p>*/}
            {/*    <p>Maybe we can live without...</p>*/}
            {/*    <p>Look. If you think this is...</p>*/}
            {/*</div>*/}
            <div>
                <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                    Hello<br/>
                    World
                </span>
                {/*</div>*/}
                {/*<div>*/}
                <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                    Hello<br/>
                    World
                </span>
            </div>

            <div>
                <p>
                    When controlling the flow of text, using the CSS property
                    <span className="inline">display: inline</span>
                    will cause the text inside the element to wrap normally.
                </p>
                While using the property <span className="inline-block">display: inline-block</span>
                will wrap the element to prevent the text inside from extending beyond its parent.

                Lastly, using the property <span className="block">display: block</span>
                will put the element on its own line and fill its parent.
            </div>
            <div className="flex flex-row">
                <div className="flex-none w-14 bg-blue-500">01</div>
                <div className="flex-shrink w-64 bg-red-500">02</div>
                <div className="flex-none w-14 bg-yellow-500">03</div>
            </div>

            <div className="flex flex-row flex-wrap gap-x-2 gap-y-4">
                <div className="w-96 h-20 bg-blue-500 flex-auto">01</div>
                <div className="w-96 h-20 bg-blue-500 flex-auto">02</div>
                <div className="w-96 h-20 bg-blue-500 flex-auto">03</div>
                <div className="w-96 h-20 bg-blue-500 flex-auto">04</div>
                <div className="w-96 h-20 bg-blue-500 flex-auto">05</div>
                <div className="w-96 h-20 bg-blue-500 flex-auto">06</div>
                <div className="w-96 h-20 bg-blue-500 flex-auto">07</div>
                <div className="w-96 h-20 bg-blue-500 flex-auto">08</div>
                <div className="w-96 h-20 bg-blue-500 flex-auto">09</div>
                <div className="w-96 h-20 bg-blue-500 flex-auto">10</div>
                <div className="w-96 h-20 bg-blue-500 flex-auto">11</div>
            </div>
            <div className="grid grid-flow-col auto-cols-auto">
                <div className="h-20 bg-blue-500 ">01</div>
                <div className="h-20 bg-blue-500 ">02</div>
                <div className="h-20 bg-blue-500 ">03</div>
                <div className="h-20 bg-blue-500 ">04</div>
                <div className="h-20 bg-blue-500 ">05</div>
                <div className="h-20 bg-blue-500 ">06</div>
                <div className="h-20 bg-blue-500 ">07</div>
                <div className="h-20 bg-blue-500 ">08</div>
                <div className="h-20 bg-blue-500 ">09</div>
                <div className="h-20 bg-blue-500 ">10</div>
                <div className="h-20 bg-blue-500">
                    11
                </div>

            </div>
            <p className="font-sans text-xl/8">The quick brown fox ...</p>
            <p className="font-serif">The quick brown fox ...</p>
            <p className="font-mono">The quick brown fox ...</p>
        </>
    )
};